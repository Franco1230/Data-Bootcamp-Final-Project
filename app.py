from flask import Flask, render_template, redirect, request, abort, jsonify
from features import feature_form_structure
from model import predict as pd

# Create an instance of Flask
app = Flask(__name__)

# Create route that renders index.html


@app.route("/")
def home():
    return render_template("index.html", feature_form_structure=feature_form_structure)


@app.route("/predict", methods=["POST"])
def predict():
    if not request.json:
        abort(400)
    prediction= pd (request.json)
    return jsonify ({"done": True, "prediction": prediction[0]}), 201

if __name__ == "__main__":
    app.run(debug=True)
