from flask import Blueprint, request, jsonify
from backend.models import Video, Recipe, Donation
from backend.extensions import db
from backend.utils import extract_transcript_as_text, parse_to_recipe, extract_youtube_id

main = Blueprint('main', __name__)


@main.route('/process_video', methods=['POST'])
def process_video():
    video_url = request.json.get('url')
    
    # Check if video already processed
    existing_video = Video.query.filter_by(url=video_url).first()
    if existing_video and existing_video.success:
        return jsonify({'recipe': existing_video.recipe.text}), 200
    
    # Process new video
    # get video id
    video_id = extract_youtube_id(video_url)
    transcript, language, error = extract_transcript_as_text(video_id)
    if not transcript:
        return jsonify({'error': 'Failed to fetch transcript'}), 400
    
    recipe_text = parse_to_recipe(transcript)
    
    # Save to database
    video = Video(url=video_url, success=True)
    recipe = Recipe(text=recipe_text)
    video.recipe = recipe
    
    db.session.add(video)
    db.session.commit()
    
    return jsonify({'recipe': recipe_text}), 200

