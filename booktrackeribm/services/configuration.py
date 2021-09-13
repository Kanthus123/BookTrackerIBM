import json
from paths import configuration_path

class Config:
    def __init__(self):
        with open(configuration_path()) as json_data_file:
            self.data = json.load(json_data_file)

    def secret_key(self):
        return self.data["secret"]
