import React,  { Component } from 'react';
import { AuthorsList } from './Components/AuthorsList';
import { authorsApi } from './rest/AuthorsApi.js';
import { NewAuthorForm } from './Components/NewAuthorForm';
import { NewWordForm } from './Components/NewWordForm';
import './App.css';
// import Moment from 'moment';


export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      
    }
    this.addNewAuthor = this.addNewAuthor.bind(this);
    
  }

  addNewAuthor = async (author) => {
    await authorsApi.post(author);
    this.fetchAuthors();
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
              addNewAuthor= {this.addNewAuthor}/>
          </div>
          <div>
              <NewWordForm />
          </div>
          <div>
              <AuthorsList />

          </div>
        </div>
      </div>
    )
  }
}


