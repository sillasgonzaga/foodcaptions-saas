from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client
import os
from utils import extract_transcript_as_text, parse_to_recipe, extract_youtube_id
import httpx
import logging
import requests

logging.basicConfig(level=logging.DEBUG)


app = Flask(__name__)
CORS(app, methods=["GET", "POST", "PUT", "DELETE"], allow_headers=["Content-Type", "Authorization"])

supabase_url = os.environ.get("SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_KEY")

supabase = create_client(supabase_url, supabase_key)


@app.route('/process_video', methods=['POST'])
def process_video():
    video_url = request.json.get('url')
    logging.debug(f'Received video URL: {video_url}')
    
    # Check if video already processed
    
    # Process new video
    # get video id
    logging.debug('Extracting transcript from Youtube')
    video_id = extract_youtube_id(video_url)
    transcript, language, error = extract_transcript_as_text(video_id)
    if not transcript:
        return jsonify({'error': f'Failed to fetch transcript. Reason: {error}'}), 400
    
    logging.debug('Parsing transcript to text')
    recipe_text = parse_to_recipe(transcript)
    
    # Save to database
    logging.debug('Storing data on Supabase')
    try:
        supabase_data = supabase.table("recipes").insert({
        "url": video_url,
        "raw_text": transcript,
        "language": language,
        "processed_text": recipe_text,
        "error": error
        }).execute()
    except Exception as e:
        logging.debug(f"Connection failed with Supabase URL: {supabase_url}. Data not saved to database. Error: {e}")
        print(f"Connection failed with Supabase URL: {supabase_url}. Data not saved to database. Error: {e}. This is the print statement")
        return jsonify({'error': str(e)}), 500

    logging.debug('Serving recipe')
    print('Serving recipe')
    return jsonify({'recipe': recipe_text}), 200


@app.route('/process_video_proxy', methods=['POST'])
def process_video_proxy():
    try:
        url = request.json.get('url')
        # Forward the request to the actual endpoint
        backend_url = os.environ.get("CLOUD_RUN_BASE_URL")
        response = requests.post(f'{backend_url}/process_video', json={'url': url})
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'An error occurred while processing the video'}), 500


@app.route('/test', methods=['GET'])
def test_request():
    try:
        response = httpx.get('https://www.google.com')
        return jsonify({'status': response.status_code}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/test_supabase', methods=['GET'])
def test_supabase():
    try:
        response = httpx.get(f'{supabase_url}/rest/v1/', headers={"apikey": supabase_key})
        return jsonify({'status': 'The api is working'})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    print('main called')
    app.run(port = 8080)

