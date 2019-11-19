import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    const folders = this.props.store.folders;

    return ( <main className="App">
      <header>
        <Header/>
      </header>
      <section className="Content">

        <Switch>
          <Route path='/' render={( routerProps ) => <Sidebar folders={folders}/>}/>
          <Route path='/folders' folders={folders} render={routeProps => <Sidebar folders={folders} {...routeProps}/>}/>
        </Switch>

        <Switch>
          <Route path='/' notes={this.props.store.notes} render={routeProps => <NoteList notes={this.props.store.notes}/>}/>
          <Route path='/notes' notes={this.props.store.notes} render={routeProps => <NoteList notes={this.props.store.notes}/>}/>
        </Switch>

      </section>
    </main> );
  }
}
// <Route render={routeProps => ( <Sidebar folders={folders}/> )}/>
//
export default App;
