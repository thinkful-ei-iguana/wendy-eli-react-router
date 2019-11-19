import React from "react";
import Note from "./Note";
import "./Note.css";

export default function NoteList(props) {
  let noteList;

  if (Array.isArray(props.notes)) {
    noteList = props.notes.map(note => {
      console.log(props, note.id, note.folderId);
      return (
        <Note
          showContent={false}
          key={note.id}
          id={note.id}
          name={note.name}
          modified={note.modified}
          folderId={note.folderId}
          content={note.content}
        />
      );
    });
  } else
    noteList = (
      <Note
        showContent={true}
        key={props.notes.id}
        id={props.notes.id}
        name={props.notes.name}
        modified={props.notes.modified}
        folderId={props.notes.folderId}
        content={props.notes.content}
      />
    );

  return Array.isArray(noteList) ? (
    <div>
      <ul className="Note-list">{noteList}</ul>
      <button className="Add-note">Add note</button>
    </div>
  ) : (
    <div>
      <ul className="Note-list">{noteList}</ul>
    </div>
  );
}
