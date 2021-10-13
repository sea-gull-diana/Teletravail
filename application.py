from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/pour')
def pour():
    return render_template('pour.html')

@app.route('/contre')
def contre():
    return render_template('contre.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/presentation')
def presentation():
    return render_template('presentation.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/temoignage')
def temoignage():
    return render_template('temoignage.html')

if __name__ == '__main__':
   app.run(debug=True)