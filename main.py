import os
from flask import Flask, render_template

app = Flask(__name__)

# Diretório onde suas músicas estão localizadas
MUSIC_DIR = "static/musicas"

# Lista de músicas disponíveis
playlist = []

# Preencha a lista de reprodução com arquivos .mp3 no diretório
for root, dirs, files in os.walk(MUSIC_DIR):
    for file in files:
        if file.endswith(".mp3"):
            playlist.append(file)

@app.route("/")
def index():
    return render_template("index.html", playlist=playlist)

if __name__ == "__main__":
     app.run(host='0.0.0.0', port=5000)
