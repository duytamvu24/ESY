from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({"message": "Keine E-Mail angegeben."}), 400

    # E-Mail speichern
    with open("emails.txt", "a") as file:
        file.write(email + "\n")

    return jsonify({"message": "Danke fürs Abonnieren, " + email + "!"})

if __name__ == "__main__":
    app.run(debug=True)
