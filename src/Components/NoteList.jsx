import React from "react";

const NoteList = ({notes}) => {
  return(
    <div className="p-4">
      {notes.length === 0 ? (
      <p>No notes yet.</p>
      ) : (
        <ul>
          {
            notes.map((note, index) => (
              <li key={note._id} className="border p-2 my-2">{note.text}</li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default NoteList;