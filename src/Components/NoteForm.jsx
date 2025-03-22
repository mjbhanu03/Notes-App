import React, { useState } from "react"

function NoteForm({addNote}) {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!note.trim()) return;
    console.log(note)
    addNote(note)
    setNote('')
  } 

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <input type="text" value={note} 
          onChange={(e) => {setNote(e.target.value)}} 
          placeholder="Enter Your Note..."
          className="border p-2 w-full"
          />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
          Add Note
        </button>
      </form>
    </>
  )
}

export default NoteForm;