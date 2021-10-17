from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World"

@app.route("/send", methods=["GET", "POST"])
def predict():
    predict = request.get_json()['seltext']
    print(predict)
    return {"prediction": "Agree"}
    
if __name__ == '__main__':
    app.run()