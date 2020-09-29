import React, { useState } from 'react';
import MainWrapper from './components/MainWrapper.jsx';
import Home from './components/Home.jsx';
import Over from './components/Over.jsx';
import './App.css';

function App() {
  const [isHome, setIsHome] = useState(true)
  const [isGame, setIsGame] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const [score, setScore] = useState(0)

  const handle = (e,score) => {
    if(e === "begin") {
      setIsHome(false);
      setIsGame(true);
    } else if (e === "over") {
      setIsGame(false);
      setIsOver(true);
      setScore(score)
    } else if (e === "new") {
      setIsOver(false);
      setIsGame(true);
    }
  }

  return (
    <div className="App">
      {isHome && <Home handle={handle}/>}
      {isGame && <MainWrapper handle={handle}/>}
      {isOver && <Over handle={handle} score={score}/>}
      {/* <Home handle={handle}/> */}
      {/* <Over  handle={handle} score={score}/> */}
      {/* <MainWrapper handle={handle}/> */}
    </div>
  );
}

export default App;
