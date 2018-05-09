import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import BookList from './BookList.js'
import SearchBooks from './SearchBooks.js'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
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

        {/*------------第一个div开始---------------*/}
        {/*使用<Route>渲染第一个div*/}
        <Route path='/search' render={() =>(
            <SearchBooks change={this.change.bind(this)}/>
        )}/>
          {/*------------第一个div结束--------------*/}

        <Route exact path='/' render={() =>(
            <BookList books={this.state.books} change={this.change.bind(this)}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
