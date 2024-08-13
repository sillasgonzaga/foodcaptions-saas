from flask.cli import FlaskGroup
from app import app, db
import os

cli = FlaskGroup(app)

@cli.command("create_db")
def create_db():
    db.create_all()
    db.session.commit()
    print("DB Created")

if __name__ == '__main__':
    cli()