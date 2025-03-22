import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';

const API_URL = "http://localhost:5000/api/notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    axios.get(API_URL)
    .then((response)=>setNotes(response.data))
    .catch((error)=>console.error('Error Fetching Data:', error))
  }, [])

  const addNote = (newNote) => {
    axios.post(API_URL, {text: newNote})
    .then((response)=>setNotes([...notes, response.data]))
    .catch((error)=>console.error('Error Fetching Data:', error))
  }
  return(
    <>
    <div className='flex m-1 w-screen bg-blue-300 text-white justify-between'>

    <div className='p-2  text-2xl'>
      <h1>Notes App</h1>
    </div>
    
    <div className='p-2 space-x-4'>
      <a href="#">Contact Us</a>
      <a href="#">About Us</a>
      <a href="#">Add</a>
      <a href="#">Nothing</a>
    </div>
    
    </div>
    {/* Navbar complete */}

    <div className='max-w-lg mx-auto mt-10 p-4 border'>
      <h1 className='text-2xl font-bold'>Notes App</h1>
      <NoteForm addNote = {addNote}/>
      <NoteList notes = {notes}/>

    </div>

    
    </>
  );

}

export default App
