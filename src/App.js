import React, {useState, useRef,useEffect } from 'react';


function App() {
  const [imgSrc, setImage] = useState('')
  const canvasRef = useRef();
  const showImage = () =>{
    setImage('https://media-public.canva.cn/k2Xu0/MAEhC6k2Xu0/1/s2.png');
  }

  useEffect(() => {
     //1. 获取canvas元素，用Ref来获取DOM元素
     const canvas = canvasRef.current;
     console.log("click",canvas);
     //2. 获取2D上下文
     const ctx = canvas.getContext("2d");
     //3. 新建一个Image对象
     const img = new Image();
 
     
     //4. 设置Image的src
     img.src = imgSrc;
     //5. 确定Image加载完毕后将Image画到canvas上
     console.log("imgsrc",img.src)
     img.onload = () =>{
       img.width = canvas.width;
       img.height = canvas.height;
       ctx.drawImage(img, 0, 0)
     }
  },[imgSrc])

  return (
    <div className="App">
      <canvas id="canvas"
      ref={canvasRef}
      width = {360}
      height = {640}
     
    />
    <button onClick={showImage}>Start</button>

   
    </div>
  );
}

export default App;
