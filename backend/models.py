from backend.extensions import db
from datetime import datetime

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255), nullable=False)
    processed_date = db.Column(db.DateTime, default=datetime.utcnow)
    success = db.Column(db.Boolean, default=False)
    recipe = db.relationship('Recipe', backref='video', uselist=False)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    video_id = db.Column(db.Integer, db.ForeignKey('video.id'), nullable=False)
    text = db.Column(db.Text, nullable=False)
    processing_date = db.Column(db.DateTime, default=datetime.utcnow)
    user_feedback = db.Column(db.Text)

class Donation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Float, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    patreon_transaction_id = db.Column(db.String(255))
    donor_name = db.Column(db.String(255))