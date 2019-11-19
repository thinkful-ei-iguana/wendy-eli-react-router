import React from "react";
import FolderList from "../components/Sidebar";
import NoteList from "../components/NoteList";

import "./App.css";

function AppFolder(props) {
  return (
    <main className="App">
      <header>
        <h1>Noteful</h1>
      </header>
      <section className="Content">
        <FolderList folders={props.store.folders} />
        <NoteList notes={props.store.notes} />
      </section>
    </main>
  );
}

export default AppFolder;
