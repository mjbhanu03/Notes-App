import React, { useEffect, useState } from "react"

function NoteForm({addOrEditNote, editNote}) {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!note.trim()) return;
    addOrEditNote(note)
    setNote('')
  } 

  useEffect(() => {
    if(editNote){
      setNote(editNote.text)
    }
  }, [editNote])

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <input type="text" value={note} 
          onChange={(e) => {setNote(e.target.value)}} 
          placeholder="Enter Your Note..."
          className="border p-2 w-full"
          />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        {editNote ? "Update Note" : "Add Note"}
      </button>
      </form>
    </>
  )
}

export default NoteForm;