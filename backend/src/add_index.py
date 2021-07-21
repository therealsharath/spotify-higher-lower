import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate("c") #Nice try ;)
firebase_admin.initialize_app(cred)

def add_index():
    count = 0
    try:
        db = firestore.client()
        artists = db.collection(u'sample').stream()
        for artist in artists:
            city_ref = db.collection(u'sample').document(u'{}'.format(artist.id))
            city_ref.set({
                u'test': 2
            }, merge=True)
        print('Done')
    except:
        print('Artist #{} could not be updated'.format(count))

add_index()