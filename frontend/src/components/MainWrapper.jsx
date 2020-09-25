import React , { useState } from 'react';
import { motion } from 'framer-motion';
import ImageElement from './ImageElement.jsx';

const image = "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

function MainWrapper() {
    const [elements, setElements] = useState([
        {name:'A', followers:230000, side:true, higher:0, prev:'none', image:image},
        {name:'B',followers:220000, side:false, higher:230000, prev:'A', image:image}
    ])
    const [animationState, setAnimationState] = useState({ x: 0 })
    const [score, setScore] = useState(0)

    const timeout = (delay) => {
        let newElements = elements
        let followers = 270000
        let last = newElements[newElements.length-1]
        let higher = last['followers']
        let prev = last['name']
        newElements.push({name: 'C',followers:followers, side:false, higher:higher, prev:prev, image:image})
        setElements(newElements)
        return new Promise(res => setTimeout(res, delay));
    }
    
    const windowWidth = window.innerWidth/2

    const handle = async() => {
        await timeout(3000);
        setScore(score + 1)
        let k = animationState['x'] - windowWidth
        setAnimationState({x:k});
    }

    return(
        <div className="main-container">
            <motion.div className="main-container" animate={animationState} transition={{ duration: 1 }}>
            {
                elements.map((item) => 
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