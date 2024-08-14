# Food Captions

A free AI SaaS to convert Youtube videos into easy-to-follow written recipes. No more rewinds.

## Stack

* Backend: Flask, OpenAI, Youtube, youtube_transcript_api  
* Frontend: React  
* Deployment: Docker, GCP (Cloud Run, Artifact Registry), Render  

The backend receives the Youtube Link URL, extracts the transcript using Youtube Transcript API (the app only works if the transcript is available), and uses ChatGPT-4o-mini to parse the messy transcript to a formatted recipe.