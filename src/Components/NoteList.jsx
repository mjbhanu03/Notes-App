import React from "react";

const NoteList = ({notes, handleDelete, handleEdit}) => {
  return(
    <div className="p-4">
      {notes.length === 0 ? (
      <p>No notes yet.</p>
      ) : (
        <ul>
          {
            notes.map((note) => (
              <div key={note._id}>
              <li className="border p-2 my-2">{note.text}</li>
              <a className="text-blue-600 hover:text-blue-200 px-1" style={{cursor: 'pointer'}} onClick={() => handleEdit(note)}>Edit</a>
              <a className="text-red-600 hover:text-red-200 px-1" onClick={() => handleDelete(note._id)}>Delete</a>
              </div>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default NoteList;