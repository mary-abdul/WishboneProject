import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [notes, setNotes] = useState([])
  const [show, setShow] = useState(false)
  const email = "name@missporters.org"
  const url = 'http://localhost:3001/notes'

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setNotes(response.data)
        console.log(response.data)
      })
  }, [])

 
  const onClick = (i) => {
    axios
      .post(url, {vote: i})
      .then(res => {
        setNotes(res.data)
        setShow(true);
      })
  }

if(show){
  console.log(notes[0])
  return (
   
    <div className="App">
      <h1 >DAISY WISHES</h1>
      <p><span>{notes.length ? notes[0].question:null}</span></p>
      <div class = "images">
      <div><img src="Octocat.png" /></div> 
      <p>{(notes[0].voting1*100/(notes.length ? notes[0].voting1+notes[0].voting2:null)).toFixed(0)}</p>
      <div><img  src="Octocat.png" /></div> 
      <p>{(notes[0].voting2*100/(notes.length ? notes[0].voting1+notes[0].voting2:null)).toFixed(0)}</p>

      </div>
    
        <button >{notes[0].caption1}</button>
        <button >{notes[0].caption2}</button>

       
    </div>

  )
} else{
    return (
      <div className="App">
        <h1 >DAISY WISHES</h1>
        <p><span>{notes.length ? notes[0].question : null}</span></p>
        <div class = "images">
        <div><img src="Octocat.png" /></div> 
        <div><img  src="Octocat.png" /></div> 
  
        </div>
      
          <button onClick = {onClick(0)}>{notes.length ? notes[0].caption1 : null}</button>
          <button onClick = {onClick(1)}>{notes.length ? notes[0].caption2: null}</button>

         
      </div>
  
    )
  }
}

export default App
