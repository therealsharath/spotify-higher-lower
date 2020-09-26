const axios = require('axios');

const getToken = async() => {
    let url = "https://accounts.spotify.com/api/token"
    let auth = 'Basic ' + btoa('fb4e47147f94480ea653c98a3d510179:9f88210bae2841ae8c608270ab2e1361')
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
    let url = "https://api.spotify.com/v1/search?q=year%3A2020&type=artist&market=US&limit=1&offset="+number;
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
    let token = await getToken()
    let artist = await fetchArtist(token, number)
    console.log(artist)
    let newElements = [...elements]

    if (elements.length < 1) {
        let name = artist['name']
        let followers = artist['followers']['total']
        let higher = 0
        let prev = null
        let image = artist['images'][0]['url']
        let newArtist = {name: name,followers:followers, side:true, higher:higher, prev:prev, image:image}
        newElements.push(newArtist)
        artist = await fetchArtist(token, number+1)
    }

    let name = artist['name']
    let followers = artist['followers']['total']
    let higher = newElements[newElements.length-1]['followers']
    let prev = newElements[newElements.length-1]['name']
    let image = artist['images'][0]['url']
    let newArtist = {name: name,followers:followers, side:false, higher:higher, prev:prev, image:image}
    newElements.push(newArtist)
    console.log(newElements)
    return newElements;
}

// {name:'A', followers:230000, side:true, higher:0, prev:'none', image:image},
// {name:'B',followers:220000, side:false, higher:230000, prev:'A', image:image}