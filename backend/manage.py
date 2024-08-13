from flask.cli import FlaskGroup
from backend.app import app, db

cli = FlaskGroup(app)

@cli.command("create_db")
def create_db():
    db.create_all()
    db.session.commit()
    print("DB Created")

if __name__ == '__main__':
    cli()