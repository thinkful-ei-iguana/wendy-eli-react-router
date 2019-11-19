import React from "react";
import Note from "./Note";
import "./Note.css";

export default function NoteList(props) {
  // const filteredList = props.notes.filter(note.id===note.folderId)
  const noteList = props.notes.map(note => {
    console.log(props, note.id, note.folderId);
    return (
      <Note
        key={note.id}
        id={note.id}
        name={note.name}
        modified={note.modified}
        folderId={note.folderId}
        content={note.content}
      />
    );
  });

  return (
    <div>
      <ul className="Note-list">{noteList}</ul>
      <button className="Add-note">Add note</button>
    </div>
  );
}
