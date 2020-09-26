import React, {useState} from 'react';
import Counter from './Counter.jsx';

function ImageElement(props) {
    const [isToggled, setToggle] = useState(props.side)

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }

    const handleClick = async(e) => {
        setToggle(!isToggled);
        if(e === (props.followers > props.logic) || (props.logic === props.followers)) {
            props.handle()
        } else {
            await timeout(3000)
            window.location.href = "/";
        }
    }

    const windowWidth = window.screen.width/2
    
    const styles = {
        maxWidth: windowWidth,
        position: "relative",
    };

    return(
        <div style={styles}>
            <img className="image" src={props.image} alt="Image1"/>
            <ul className="centered">
            <li className="artist-name">"{props.name}"</li>
            <li className="has">has</li>
            {isToggled && <li className="number"><Counter followers={props.followers}/></li>}
            {!isToggled && <li className="button-container"><button className="custom-button" onClick={() => handleClick(true)}>Higher &nbsp;<font className="higher">◭</font></button></li> }
            {!isToggled &&<li className="button-container"><button className="custom-button" onClick={() => handleClick(false)}>Lower  &nbsp;&nbsp;<font className="lower">◭</font></button></li> }
            {!isToggled ? <li className="has button-buffer">Spotify followers than {props.prev}</li> : <li className="has button-buffer">Spotify followers</li>}
            </ul>
        </div>
    )
}

export default ImageElement;