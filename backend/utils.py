from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound
from xml.etree import ElementTree
from openai import OpenAI
import os
from backend.prompts import transcription_prompt, video_description_prompt
import re

key = os.getenv("OPEN_AI_KEY")
open_ai_client = OpenAI(api_key = key)

GPT_MODEL = 'gpt-4o-mini'


def extract_youtube_id(url):
    # Regular expression to capture YouTube video ID
    pattern = r'(?:https?://)?(?:www\.)?(?:youtube\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)|(?:.*[?&]v=)|(?:.*[?&]vi=)|(?:[^/]+/.+/)|(?:.*[?&]v%3D)|(?:.*[?&]vi%3D)|(?:[^/]+/vi?/))|(?:youtu\.be/))([^?&/%\s]+)'
    match = re.search(pattern, url)
    return match.group(1) if match else None

def extract_transcript_as_text(video_id: str) -> str:
    error = None
    try:
        transcript = list(YouTubeTranscriptApi.list_transcripts(video_id))[0]
        language = transcript.language_code
        transcript_dict = transcript.fetch()
        transcript_text = [t['text'] for t in transcript_dict]
        transcript_text = '\n'.join(transcript_text)
    # if transcripts are not available, store in file
    except TranscriptsDisabled as e:
        error = "TranscriptsDisabled"
        transcript_text, language = None, None
    except NoTranscriptFound:
        error = "NoTranscriptFound"
        transcript_text, language = None, None
    except ElementTree.ParseError:
        error = "XMLError"
        transcript_text, language = None, None
    
    return transcript_text, language, error

def get_whether_description_has_recipe(video_description: str, client):
    response = client.chat.completions.create(
    model = GPT_MODEL,


    messages=[
        {
        "role": "system",
        "content": [{"type": "text", "text": video_description_prompt}]
        },
        {
        "role": "user",
        "content": [{"type": "text", "text": video_description}]
        }
    ],
    temperature=0,
    max_tokens=2560,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )

    return response.choices[0].message.content

def parse_to_recipe(transcript: str) -> str:
    
    response = open_ai_client.chat.completions.create(
    model = GPT_MODEL,


    messages=[
        {
        "role": "system",
        "content": [{"type": "text", "text": transcription_prompt}]
        },
        {
        "role": "user",
        "content": [{"type": "text", "text": transcript}]
        }
    ],
    temperature=0,
    max_tokens=2560,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )

    return response.choices[0].message.content
