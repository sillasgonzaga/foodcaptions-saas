# Use an official Python runtime as a parent image
FROM python:3.10.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV DATABASE_URL=postgresql://foodcaptions_admin:123456@localhost/foodcaptions
ENV OPENAI_API_KEY=sk-proj-hGSawdo1eCQHSFb6VQdTT3BlbkFJH6PIw8an1moCHIMYZzdE
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV SUPABASE_URL=https://uopcdmzlaufxywwyxudr.supabase.co 
ENV SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcGNkbXpsYXVmeHl3d3l4dWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NjczMjksImV4cCI6MjAzOTE0MzMyOX0.L1zq_T_QqZxQrIxumIrP8Hk5BKk96hLQk1OraDoR_mI

# Run the application
CMD ["flask", "run", "--host=0.0.0.0"]
