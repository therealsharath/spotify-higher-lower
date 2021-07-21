import pandas as pd
from spotify_req import validate_artist
from firestore_req import add_artist_to_firestore_db


artist_csv = pd.read_csv('../data/artist-uris.csv', header=None)
count = 0
artist_count = 0

for artist in artist_csv.values:
    artist_count += 1
    artist_id = artist[1].split(':')[2]
    artist_valid = validate_artist(artist_id)

    if artist_valid:
        add_artist_to_firestore_db(artist[0], artist_id, count)
        count += 1

    if artist_count % 1000 == 0:
        print(artist_count, count)

print(count)
