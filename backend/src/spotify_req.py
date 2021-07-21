import tekore as tk
import time

client_id = "a" #Nice try ;)
client_secret = "b"

app_token = tk.request_client_token(client_id, client_secret)
spotify = tk.Spotify(app_token)

def validate_artist(artistId):
    validated = False
    while not validated:
        try:
            artist = spotify.artist(artistId)
            validated = True
            if len(artist.images) > 0 and artist.followers.total > 1000000:
                return True
            return False
        except:
            print('Artist {} could not be validated'.format(artistId))
            time.sleep(6) 
