from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from routes import main

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)


app.register_blueprint(main)

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 5000)

