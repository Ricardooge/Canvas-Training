import React, {useState, useRef,useEffect } from 'react';
import {draw} from './canvas'


function App() {
  // const [imgSrc, setImage] = useState('')
  const canvasRef = useRef();
  const showVideo = () =>{
    // setImage('https://media-public.canva.cn/k2Xu0/MAEhC6k2Xu0/1/s2.png');
    const canvas = canvasRef.current;
    draw(canvas)
  }

  return (
    <div className="App">
      <canvas id="canvas"
      ref={canvasRef}
      width = {360}
      height = {640}
     
    />
    <button onClick={showVideo}>Play</button>

   
    </div>
  );
}

export default App;
