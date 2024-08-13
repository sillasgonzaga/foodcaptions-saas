from flask import Blueprint, request, jsonify
from backend.utils import extract_transcript_as_text, parse_to_recipe, extract_youtube_id
from supabase import create_client, Client
import os

main = Blueprint('main', __name__)

# load supabase db
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

supabase: Client = create_client(url, key)


@main.route('/process_video', methods=['POST'])
def process_video():
    video_url = request.json.get('url')
    
    # Check if video already processed
    #existing_video = Video.query.filter_by(url=video_url).first()
    #if existing_video and existing_video.success:
    #    return jsonify({'recipe': existing_video.recipe.text}), 200
    
    # Process new video
    # get video id
    video_id = extract_youtube_id(video_url)
    transcript, language, error = extract_transcript_as_text(video_id)
    if not transcript:
        return jsonify({'error': f'Failed to fetch transcript. Reason: {error}'}), 400
    
    recipe_text = parse_to_recipe(transcript)
    
    # Save to database
    supabase_data = supabase.table("recipes").insert({
    "url": video_url,
    "raw_text": transcript,
    "language": language,
    "processed_text": recipe_text,
    "error": error
    }).execute()

    return jsonify({'recipe': recipe_text}), 200

