import React , { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageElement from './ImageElement.jsx';
import { getArtist } from './GetArtist';
import tick from './images/tick.png';
import cross from './images/cross.png';

function MainWrapper(props) {
    const [elements, setElements] = useState(props.elements);
    const [animationState, setAnimationState] = useState({ x: 0 });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth/2);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight/2);
    const [score, setScore] = useState(0);
    const [isMobile, setMobile] = useState(window.innerWidth<600);
    const [isTransition, setTransition] = useState(false);
    const [isRight, setRight] = useState(false);

    useEffect(() => {
        if(isMobile && elements.length < 1) {
            setAnimationState({ y: 0 });
        }
        if(window.innerWidth/2 !== windowWidth) {
            setWindowWidth(window.innerWidth/2);
            setMobile(window.innerWidth<600);
        }
        if(window.innerHeight/2 !== windowHeight) {
            setWindowHeight(window.innerHeight/2);
        }
    },[isMobile,windowHeight,windowWidth])

    const timeout = (delay,choice) => {
        setTransition(true);
        setRight(choice);
        return new Promise(res => setTimeout(res, delay));
    }

    const handle = async(choice) => {
        if (choice) {
            const response = await getArtist(elements, Math.floor((Math.random() * 250) + 1));
            setElements(response);
            await timeout(2000,choice);
            setScore(score + 1);
            if(!isMobile) {
                setAnimationState({ x:0-windowWidth*(score+1) });
            } else {
                setAnimationState({ y:0-windowHeight*(score+1) });
            }
            setRight(false);
            setTransition(false);
        } else {
            await timeout(2000,choice);
            props.handle("over",score)
        }
    }

    const variants = {
        initial: {
            scale: 0,
            opacity: 0,
        },
        final: {
            scale: 1,
            opacity: 1,
        }
    };

    return(
        <div className="main-container">
            <motion.div className="main-container" animate={animationState} transition={{ duration: 1 }}>
            {
                (elements.length > 1) && elements.map((item) => 
                    <ImageElement name={item.name} followers={item.followers} handle={handle} side={item.side} logic={item.higher} prev={item.prev} image={item.image} transitionTime={item.transitionTime}/>
            )}
            </motion.div>
            
            <div className="centered">
                {!isTransition ? <AnimatePresence>
                    <div className="circle">
                        <div className="centered">vs</div>
                    </div>
                </AnimatePresence> :
                <motion.div
                    initial={{scale:0}}
                    animate={!isTransition ? "initial" : "final"}
                    variants={variants}
                    transition={{ duration: 1 }}
                >
                    { isRight ?
                        <div className="circle right">
                            <img src={tick} className="centered tick" alt="right"/>
                        </div> :
                        <div className="circle wrong">
                            <img src={cross} className="centered tick" alt="wrong"/>
                        </div>
                    }
                </motion.div>}
            </div>
            <div className="source">Source: <font className="spotify">Spotify</font></div>
            <div className="score">Score: {score}</div>
        </div>        
    )
}

export default MainWrapper;