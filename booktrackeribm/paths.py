import os.path

def configuration_path():
    config_path = os.path.abspath(
        os.path.join(os.sep, os.path.abspath(os.path.dirname(__file__)), 'services',
                     '.databaseconfig.json'))
    return config_path