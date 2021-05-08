import React,  { Component } from 'react';
import { AuthorsList } from './Components/AuthorsList';
// import { authorsApi } from './rest/AuthorsApi.js';
import { NewAuthorForm } from './Components/NewAuthorForm';
import { NewWordForm } from './Components/NewWordForm';
// import { Author } from './Components/Author';
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      authors: []
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">One Word</h1>
            <p className="lead">At this moment in time, what is your One Word?</p>
          </div>
          <div>
              <NewAuthorForm 
                addNewAuthor={this.addNewAuthor}/>
          </div>
          <div>
              <NewWordForm 
                addNewWord={this.addNewWord}/>
          </div>
          <div>
              <AuthorsList 
                />

          </div>
        </div>
      </div>
    )
  }
}


