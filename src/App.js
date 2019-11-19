import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import "./App.css";

//building 3 routes: main, dynamic FOLDER, dynamic NOTE
class App extends Component {
  state = {
    folders: this.props.store.folders,
    notes: this.props.store.notes
  };

  render() {
    const { folders, notes } = this.state;
    return ( <main className="App">
      <header>
        <Link to='/'>
          <Header/>
        </Link>
      </header>
      <section className="Content">
        <Switch>
          <Route exact={true} path="/" render={routeProps => {
              return ( <div className="Content">
                <Sidebar folderId={folders.find( folder => folder.id === routeProps.match.params.folderId )} folders={folders} {...routeProps}/>
                <NoteList notes={this.props.store.notes}/>
              </div> );
            }}/>

          <Route path="/folder/:folderId" folders={folders} render={routeProps => {
              console.log( routeProps.match );
              const filteredNotes = this.props.store.notes.filter( n => n.folderId === routeProps.match.params.folderId )

              return ( <div className="Content">
                <Sidebar folderId={folders.find( folder => folder.id === routeProps.match.params.folderId )} folders={folders} {...routeProps}/>
                <NoteList notes={filteredNotes}/>
              </div> );
            }}/>

          <Route path="/note/:noteId" folders={folders} render={routeProps => {
              console.log( routeProps.match );
              const selectedNote = this.props.store.notes.find( n => n.id === routeProps.match.params.noteId )

              console.log( selectedNote )

              return ( <div className="Content">
                <Sidebar folders={folders} {...routeProps}/>
                <NoteList notes={selectedNote}/>
              </div> );
            }}/>
        </Switch>

      </section>
    </main> );
  }
}
// <Route render={routeProps => ( <Sidebar folders={folders}/> )}/>
//
export default App;
