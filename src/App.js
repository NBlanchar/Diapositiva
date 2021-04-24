import { useState } from 'react';
import './App.css';
import Diapositivas from'./component/Diapositivas'

function App() {
  const list =[
    {
      title:"Today's workout plan",
      text:"We're gonna do 3 fundamental exercise",      
    },
    {
      title:"First, 10 push-ups",
      text:"Do 10 reps. Rememer about full range of motion. Don´t rus",     
    },
    {
      title:"Next 20 Squat",
      text:"Squat are important. Remeber to keep your back Straight",      
    },{
      title:"Finally, 15 sit-ups",
      text:"Slightly bend your knees. Remembere about full range of motion",      
    },
    {
      title:"Great job!",
      text:"You Made it Have a nice day and see you next time!",      
    }
  ];

  return (
    <div className="App">
      <Diapositivas list={list}/>
    </div>
  );
}

export default App;
