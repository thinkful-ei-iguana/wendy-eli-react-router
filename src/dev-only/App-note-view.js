import React from "react";
import NoteListView from "./NoteListView";
import NoteFolderView from "./NoteFolderView";

import "./App.css";

function AppNote(props) {
  return (
    <main className="App">
      <header>
        <h1>Noteful</h1>
      </header>
      <section className="Content">
        <NoteFolderView />
        <NoteListView notes={props.store.notes} />
      </section>
    </main>
  );
}

export default AppNote;
