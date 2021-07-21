import { fetchArtistId } from './fetchArtistId';
import axios from 'axios';

const getToken = async() => {
    let url = "https://accounts.spotify.com/api/token";
    let auth = 'Basic ' + btoa(process.env.REACT_APP_SPOTIFY_KEY + ':' + process.env.REACT_APP_SPOTIFY_SECRET);
    let qs = require('qs');
    const data = qs.stringify({
        'grant_type': 'client_credentials' 
    });

    let tryAgain = true;
    while(tryAgain) {
        try {
            const config = {
                method: 'post',
                url: url,
                headers: { 'Authorization': auth },
                data: data,
            }
            const response = await axios(config);
            tryAgain = false;
            return response['data']['access_token'];
        } catch (error) {
            console.log(error)
        }
    }
}

const fetchArtist = async(token, artistId) => {
    let bearer =  "Bearer " + token;
    let url = "https://api.spotify.com/v1/artists?ids=" + artistId;
    try {
        var config = {
            method: 'get',
            url,
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json', 
              'Authorization': bearer,
            }
          };
        const response = await axios(config)
        return response
    } catch (error) {
         console.error(error);
    }
}

const createArtist = (artist, elements=null) => {
    let name = artist['name'];
    let followers = artist['followers']['total'];
    let image = artist['images'][0]['url'];
    let higher = elements === null ?  0 : elements[elements.length-1]['followers'];
    let prev = elements === null ? null : elements[elements.length-1]['name'].split(/\s+/)[0];
    let side = elements === null ? true : false;

    let newArtist = {
        name,
        followers,
        side,
        higher,
        prev,
        image, 
    };

    return newArtist;
}

export async function getArtist(elements) {
    let number = Math.floor(Math.random() * 1788)
    let artist = await fetchArtistId(number.toString())

    let token = await getToken();
    let artistDetails = await fetchArtist(token, artist['artistId']);

    let newElements = [...elements];
    if (elements.length < 1) {
        let newArtist = createArtist(artistDetails['data']['artists'][0]);
        newArtist['transitionTime'] = 0;
        newElements.push(newArtist);
        
        number += 1;
        artist = await fetchArtistId(number.toString());
        artistDetails = await fetchArtist(token, artist['artistId']);
    }

    let newArtist = createArtist(artistDetails['data']['artists'][0], newElements);
    newElements.push(newArtist);

    return newElements
}