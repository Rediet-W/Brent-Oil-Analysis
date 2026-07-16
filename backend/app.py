from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app) 

# Load data globally once for efficiency
df = pd.read_csv('../data/BrentOilPrices.csv')
events = pd.read_csv('../data/events.csv')

@app.route('/api/prices', methods=['GET'])
def get_prices():
    # Return last 500 records to keep frontend fast
    return jsonify(df.tail(500).to_dict(orient='records'))

@app.route('/api/events', methods=['GET'])
def get_events():
    return jsonify(events.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)