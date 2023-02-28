import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
        console.log(response.data)
      })
  }, [])

  const addVote2 = (event) => {
    event.preventDefault()
    setShow(true)
    const newVotes = {
      question: notes[0].question,
      caption1: notes[0].caption1,
      caption2: notes[0].caption2,
      voting1: notes[0].voting1,
      voting2: (notes[0].voting2)+1}
    axios
      .put('http://localhost:3001/notes/1', newVotes)

      axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
        console.log(response.data)
      })
  }
  const addVote1 = (event) => {
    event.preventDefault()
    setShow(true)

    const newVotes = {
      question: notes[0].question,
      caption1: notes[0].caption1,
      caption2: notes[0].caption2,
      voting2: notes[0].voting2,
      voting1: (notes[0].voting1)+1}
      axios
      .put('http://localhost:3001/notes/1', newVotes)
      axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
        console.log(response.data)
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
      
          <button onClick = {addVote1}>{notes.length ? notes[0].caption1 : null}</button>
          <button onClick = {addVote2}>{notes.length ? notes[0].caption2: null}</button>

         
      </div>
  
    )
  }
}

export default App
