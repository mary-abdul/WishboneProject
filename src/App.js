import './App.css';
import { useState } from 'react';
import axios from 'axios'; 

function App() {
const [vote, setVote] = useState(false)
const [data1, setData1]=useState(0);
const [data2, setData2]= useState(0)
const Voting1 = () =>{
    setData1(parseInt(data1+1)) 
    console.log("data1")
    console.log(data1)
  setVote(true);
}
  const Voting2 = () =>{
   
      setData2(data2+1)
      console.log("data2")
      console.log(data2)
    setVote(true);
  }
  const bread = 'here in vote';
if (vote){
  console.log(bread)
  return(
    <div className="App">
    <h1>DAISY WISHES</h1>
    <h5>Question insert here?</h5>


        <div  onClick = {Voting1}> <img src="Octocat.png" className="App-logo" alt="logo"  /></div>
        <p> {(data1*100/(data2+data1)).toFixed(0)} %</p>
        <div onClick = {Voting2}> <img src="Octocat.png" className="App-logo" alt="logo" /></div>
        <p> {(data2*100/(data1+data2)).toFixed(0)} %</p>

      <p>caption</p>
      <p>caption</p>
  </div>
  )
}
else{
return (
    <div className="App">
      <h1 >DAISY WISHES</h1>
      <p><span>Question insert here?</span></p>
      <div class = "images">
      <div onClick = {Voting1}><img src="Octocat.png" className="App-logo" alt="logo"/></div> 
      <div onClick = {Voting2}><img  src="Octocat.png" className="App-logo" alt="logo"/></div> 

      </div>
    
        <p>caption</p>
        <p>caption</p>
       
    </div>

  );
}}

export default App;
