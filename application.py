from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/',methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/pour.html',methods=['GET', 'POST'])
def index():
    return render_template('pour.html')

if __name__ == '__main__':
   app.run(debug=True)