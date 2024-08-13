from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.config import Config
from backend.extensions import db
from backend.models import Video, Recipe, Donation
from backend.routes import main

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

app.register_blueprint(main)

if __name__ == '__main__':
    app.run(debug=True)

