from flask import flask

app = Flask(__name__)

#Members API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}