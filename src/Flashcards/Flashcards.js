import React, { Component } from 'react'
//import NotesForm from './NotesForm';
import AllCards from './AllCards';

export default class Flashcards extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Flashcards</h1>

        {/* <NotesForm /> */}
        <hr />
        <AllCards />
      </React.Fragment>
    )
  }
}