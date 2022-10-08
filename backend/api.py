from unsplash.api import Api
from unsplash.auth import Auth

import requests

client_id = "eZ-1Wx3T4Ahvk5MlWRU6Ue2kGM0dBU5MOLP87-o83MU"
client_secret = "PsXkmPRAsIZKhqSc9Ehd9MQISAYtJe7eOxvxLIbIecU"
redirect_uri = ""
code = ""

auth = Auth(client_id, client_secret, redirect_uri, code=code)
api = Api(auth)