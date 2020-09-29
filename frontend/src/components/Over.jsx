import React from 'react';

function Over(props) {
    return(
        <div className="home over-bg-image">
            <div>
                <div>Your score:</div>
                <div className="number">{props.score}</div>
                <div className="prompt-container">
                    <div className="prompt no-buffer">Try Again? You can definitely beat that!</div>
                    <div className="prompt no-buffer">Checkout other projects <a className="link" href="http://www.github.com/therealsharath" target="blank">here</a> 😇</div>
                </div>
                <div className="over-buttons">
                    <div className="button-container"><button className="home-button" onClick={() => props.handle("new")}>Play Again 😁</button></div>
                    <div className="button-container"><button className="home-button" onClick={() => props.handle("menu")}> Back to Menu</button></div>
                </div>
                <div className="prompt">Inspired by <a className="link" href="http://www.higherlowergame.com/" target="blank">@HigherLowerGame</a></div>
            </div>
            <div className="source">Photo by <a className="link" href="https://www.pexels.com/@vovaflame" target="blank">Vova Krasilnikov</a> from <a className="link" href="https://www.pexels.com" target="blank">Pexels</a></div>
            <div className="right-source">Made using the <a className="spotify" href="https://developer.spotify.com/documentation/web-api/" target="blank">Spotify API</a></div>
        </div>
    )
}

export default Over;
