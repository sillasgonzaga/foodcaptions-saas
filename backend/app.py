from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client
import os
from utils import extract_transcript_as_text, parse_to_recipe, extract_youtube_id

app = Flask(__name__)
CORS(app, methods=["GET", "POST", "PUT", "DELETE"], allow_headers=["Content-Type", "Authorization"])

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

supabase = create_client(url, key)


@app.route('/', methods=['POST'])
def process_video():
    print('Starting app')
    video_url = request.json.get('url')
    print(f'Received video URL: {video_url}')  # Log input
    
    # Check if video already processed
    
    # Process new video
    # get video id
    print('Extracting transcript from Youtube')
    video_id = extract_youtube_id(video_url)
    transcript, language, error = extract_transcript_as_text(video_id)
    if not transcript:
        return jsonify({'error': f'Failed to fetch transcript. Reason: {error}'}), 400
    
    print('Parsing transcript to text')
    recipe_text = parse_to_recipe(transcript)
    
    # Save to database
    print('Storing data on Supabase')
    supabase_data = supabase.table("recipes").insert({
    "url": video_url,
    "raw_text": transcript,
    "language": language,
    "processed_text": recipe_text,
    "error": error
    }).execute()

    print('Serving recipe')
    return jsonify({'recipe': recipe_text}), 200


if __name__ == '__main__':
    print('main called')
    app.run(port = 5000)

