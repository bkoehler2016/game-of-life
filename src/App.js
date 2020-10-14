import React from 'react';
import './App.css';
import Grid from './components/grid/Grid'

function App() {
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  return (
    <div className="App">
     <h1>Game of Life</h1>
     <Grid draw= {draw}/>
    </div>
  );
}

export default App;
