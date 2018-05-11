import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BookList from './BookList.js'
import SearchBooks from './SearchBooks.js'


class BooksApp extends React.Component {
  state = {
      showSearchPage: false,
      books: [],
  }

  constructor() {
      super();
      this.change = this.change.bind(this);
  }

  componentDidMount(){
      BooksAPI.getAll().then(data=>
        this.setState({books: data})
      )
  }

  change(book, shelf){
      BooksAPI.update(book, shelf).then(()=>{
          BooksAPI.getAll().then(data=>
            this.setState({books: data})
          )
      })
  }

  render() {
    return (
      <div className="app">

        <Route path='/search' render={() =>(
            <SearchBooks books={this.state.books} change={this.change}/>
        )}/>

        <Route exact path='/' render={() =>(
            <BookList books={this.state.books} change={this.change}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
