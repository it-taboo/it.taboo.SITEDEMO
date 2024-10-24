from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Путь к JSON-файлу
JSON_FILE_PATH = './database/data.json'

# Функция для чтения JSON-файла
def read_json():
    with open(JSON_FILE_PATH, 'r') as file:
        return json.load(file)

# Функция для записи в JSON-файл
def write_json(data):
    with open(JSON_FILE_PATH, 'w') as file:
        json.dump(data, file, indent=4)

# Эндпоинт для получения данных из JSON
@app.route('/get-json', methods=['GET'])
def get_json():
    data = read_json()
    return jsonify(data)

# Эндпоинт для редактирования JSON
@app.route('/edit-json', methods=['POST'])
def edit_json():
    new_data = request.json  # Получаем данные из запроса
    write_json(new_data)     # Перезаписываем JSON-файл
    return jsonify({"message": "Данные успешно обновлены!"})

if __name__ == '__main__':
    app.run(debug=True)