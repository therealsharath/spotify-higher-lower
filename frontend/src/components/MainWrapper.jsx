import React , { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageElement from './ImageElement.jsx';
import { getArtist } from './GetArtist';

function MainWrapper() {
    const [elements, setElements] = useState([])
    const [animationState, setAnimationState] = useState({ x: 0 })
    const [score, setScore] = useState(0)

    useEffect(() => {
        async function redemption() {
            let response = await getArtist(elements,Math.floor((Math.random() * 250) + 1));
            setElements(response)
        }
        redemption()
    },[elements])

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }
    
    const windowWidth = window.innerWidth/2

    const handle = async() => {
        const response = await getArtist(elements, Math.floor((Math.random() * 250) + 1))
        setElements(response)
        await timeout(3000);
        setScore(score + 1)
        let k = animationState['x'] - windowWidth
        setAnimationState({x:k});
    }

    return(
        <div className="main-container">
            <motion.div className="main-container" animate={animationState} transition={{ duration: 1 }}>
            {
                (elements.length > 1) && elements.map((item) => 
                    <ImageElement name={item.name} followers={item.followers} handle={handle} side={item.side} logic={item.higher} prev={item.prev} image={item.image}/>
            )}
            </motion.div>
            <div className="centered circle ">
                <div className="centered">vs</div>
            </div>
            <div className="score">Score: {score}</div>
        </div>        
    )
}

export default MainWrapper;