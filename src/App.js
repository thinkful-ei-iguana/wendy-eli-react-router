import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
    return (
      <main className="App">
        <header>
          <Header />
        </header>
        <section className="Content">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Sidebar folders={folders} notes={notes} />;
              }}
            />
            <Route
              path="/folder/:folderId"
              folders={folders}
              render={routeProps => {
                console.log(routeProps.match);
                return (
                  <Sidebar
                    folderId={folders.find(
                      folder => folder.id === routeProps.match.params.folderId
                    )}
                    folders={folders}
                    {...routeProps}
                  />
                );
              }}
            />
          </Switch>

          <Switch>
            <Route
              path="/"
              notes={notes}
              render={routeProps => <NoteList notes={notes} />}
            />
            <Route
              path="/notes"
              notes={this.props.store.notes}
              render={routeProps => <NoteList notes={this.props.store.notes} />}
            />
          </Switch>
        </section>
      </main>
    );
  }
}
// <Route render={routeProps => ( <Sidebar folders={folders}/> )}/>
//
export default App;
