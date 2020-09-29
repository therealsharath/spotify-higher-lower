import React, {useState} from 'react';
import Counter from './Counter.jsx';

function ImageElement(props) {
    const [isToggled, setToggle] = useState(props.side);

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleClick = async(e) => {
        setToggle(!isToggled);
        if(e === (props.followers > props.logic) || (props.logic === props.followers)) {
            await timeout(1750);
            props.handle(true);
        } else {
            await timeout(1750);
            props.handle(false);
        }
    }
    
    const styles = {
        position: "relative",
        minHeight: window.innerHeight/2
    };

    return(
        <div style={styles}>
            <img className="image" src={props.image} alt="Image1"/>
            <div className="centered">
                <div className="artist-name">{props.name}</div>
                <div className="has">has</div>
                {isToggled && <div className="number">{props.transitionTime !== 0 ? <Counter followers={props.followers}/> : numberWithCommas(props.followers)}</div>}
                {!isToggled && <div className="button-container"><button className="custom-button" onClick={() => handleClick(true)}>Higher &nbsp;<font className="higher">◭</font></button></div> }
                {!isToggled &&<div className="button-container"><button className="custom-button" onClick={() => handleClick(false)}>Lower  &nbsp;&nbsp;<font className="lower">◭</font></button></div> }
                {!isToggled ? <div className="has button-buffer"><font className="spotify">Spotify</font> followers than {props.prev}</div> : <div className="has button-buffer"><font className="spotify">Spotify </font>followers</div>}
            </div>
        </div>
    )
}

export default ImageElement;