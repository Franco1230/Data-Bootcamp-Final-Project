from flask import Flask, render_template, redirect

# Create an instance of Flask
app = Flask(__name__)

# Create route that renders index.html
@app.route("/")
def home(): 
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug = True)