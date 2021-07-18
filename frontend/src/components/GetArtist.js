const axios = require('axios');

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

const fetchArtist = async(token) => {
    let number = Math.floor((Math.random() * 250) + 1)
    let bearer =  "Bearer " + token;
    let url = "https://api.spotify.com/v1/search?q=a&type=artist&market=US&limit=1&offset="+ number;
    try {
        const config = {
            method: 'get',
            url: url,
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': bearer,
            },
        }
        const response = await axios(config)
        return response['data']['artists']['items'][0]
    } catch (error) {
         console.error(error);
    }
}

const fetchIds = async(token) => {
    let bearer =  "Bearer " + token;
    var config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/categories/pop/playlists',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer BQCosReTibebPBnVmFfhwS1jJmMjTSUj6OtidHg4073ehhzbtfXbbHRqe1Uuy5azWVeg3L26DhNqI5-y481m33NaLZ5GMyaEq6E5Z65DDEMVh0ZhhkN8ZNwxnWPvVkBiwsIaaY2whT9YNK6u6i-1pM9woYkOtiWlCro'
        }
      };
}

export async function getArtist(elements, number) {
    let token = await getToken();
    let artist = await fetchArtist(token, number);

    while (artist['images'].length < 1) {
        number += 1;
        await fetchArtist(token, number);
        console.log(artist)
    }

    console.log(artist)

    let newElements = [...elements];
    if (elements.length < 1) {
        let name = artist['name'];
        let followers = artist['followers']['total'];
        let higher = 0;
        let prev = null;
        let image = artist['images'][0]['url'];
        let newArtist = {name: name,followers:followers, side:true, higher:higher, prev:prev, image:image, transitionTime:0};
        newElements.push(newArtist);
        await fetchArtist(token, number + 1);
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