import React, { useState } from 'react';
import logo from './images/spotify-high-low.png';

function Home(props) {
    return(
        <div className="home home-bg-image">
            <div>
                <img className="logo" src={logo}></img>
                <div>Who has more <font className="spotify">Spotify</font> followers?</div>
                <div className="home-buttons"><button className="home-button" onClick={() => props.handle("begin")}>Play Game</button></div>
                <div className="source">Photo by <a className="link" href="https://www.pexels.com/@brett-sayles" target="blank">Brett Sayles</a> from <a className="link" href="https://www.pexels.com" target="blank">Pexels</a></div>
            </div>
        </div>
    )
}

export default Home;
