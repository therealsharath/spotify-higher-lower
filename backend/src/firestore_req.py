import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate("c") #Nice try ;)
firebase_admin.initialize_app(cred)


def add_artist_to_firestore_db(name, artistId, index):
    try:
        db = firestore.client()
        data = {
            u'name': u'{}'.format(name),
            u'artistId': u'{}'.format(artistId),
        }
        db.collection(u'artists').document(u'{}'.format(index)).set(data)
    except:
        print('Artist {} could not be added'.format(name))