from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from extensions import db
from models import Video, Recipe, Donation
from routes import main

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

app.register_blueprint(main)

if __name__ == '__main__':
    app.run(debug=True)

