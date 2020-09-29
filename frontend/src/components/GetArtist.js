const axios = require('axios');

const getToken = async() => {
    let url = "https://accounts.spotify.com/api/token";
    let auth = 'Basic ' + btoa(process.env.REACT_APP_SPOTIFY_KEY);
    var qs = require('qs');
    var data = qs.stringify({
    'grant_type': 'client_credentials' 
    });
    try {
        const config = {
            method: 'post',
            url: url,
            headers: { 'Authorization': auth },
            data: data,
        }
        const response = await axios(config)
        return response['data']['access_token'];
    } catch (error) {
         console.error(error);
    }
}

const fetchArtist = async(token, number) => {
    let bearer =  "Bearer " + token;
    let market = Math.floor((Math.random() * 2) + 1);
    let mar;
    switch(market) {
        case 1:
            mar = "US"
            break;
        case 2:
            mar = "GB"
            break;
        default:
          mar = "US"
    }
    let url = "https://api.spotify.com/v1/search?q=year%3A2020&type=artist&market=" + mar +  "&limit=1&offset="+ number;
    try {
        const config = {
            method: 'get',
            url: url,
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': bearer,  },
        }
        const response = await axios(config)
        return response['data']['artists']['items'][0]
    } catch (error) {
         console.error(error);
    }
}

export async function getArtist(elements, number) {
    let token = await getToken();
    let artist = await fetchArtist(token, number);
    let newElements = [...elements];
    if (elements.length < 1) {
        let name = artist['name'];
        let followers = artist['followers']['total'];
        let higher = 0;
        let prev = null;
        let image = artist['images'][0]['url'];
        let newArtist = {name: name,followers:followers, side:true, higher:higher, prev:prev, image:image, transitionTime:0};
        newElements.push(newArtist);
        artist = await fetchArtist(token, number+1);
    }

    let name = artist['name'];
    let followers = artist['followers']['total'];
    let higher = newElements[newElements.length-1]['followers'];
    let prev = newElements[newElements.length-1]['name'].split(/\s+/)[0];
    let image = artist['images'][0]['url'];
    let newArtist = {name: name,followers:followers, side:false, higher:higher, prev:prev, image:image};
    newElements.push(newArtist);
    return newElements;
}