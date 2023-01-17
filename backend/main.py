from flask import Flask, request, url_for
from pymongo import MongoClient
from flask_cors import CORS, cross_origin

import gridfs

#instantiate Flask
app = Flask(__name__)
# CORS(app, resources={r"/uploadImage": {"origins": "*"}}, supports_credentials=True)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

connection = MongoClient('localhost', 27017)
database = connection['GenArt']

fs = gridfs.GridFS(database)

#upload image
@app.route('/uploadImage', methods=['POST'])
# @cross_origin()
def uploadImage():
    if request.method == 'POST':
        print('yes')
        file = request.files['file']
        
        with open(file, 'rb') as f:
            contents = f.read()

        result = fs.put(contents, filename='file')
        result.headers.add("Access-Control-Allow-Origin", "*")
        return result

@app.route('/uploadImage/user', methods=['GET'])
def test():
    return 'Here are all of the users'
#retrieve image
# @app.route('getImage', methods=['GET'])
# def getImage():
#     return {}

if __name__ == "__main__":
    app.run(debug=True)