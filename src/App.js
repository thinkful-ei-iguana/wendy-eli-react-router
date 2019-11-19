import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="App">
        <header>
          <Route exact path="/" component={Header} />
        </header>
        <section className="Content">
          <Sidebar folders={this.props.store.folders} />
          <NoteList notes={this.props.store.notes} />
        </section>
      </main>
    );
  }
}

export default App;
