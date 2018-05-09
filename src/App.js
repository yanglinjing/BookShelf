import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import BookList from './BookList.js'
import Book from './Book.js'


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
    tmp: []
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
          <div className="search-books">
            <div className="search-books-bar">
              {/*使用<Link>链接到list页面*/}
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={event =>
                        BooksAPI.search(event.target.value).then(data=>{
                          if(Array.isArray(data)){
                            this.setState({tmp: data});
                          }else{
                            this.setState({tmp: []});
                          }
                        }
                    )}
                />

              </div>
            </div>

              <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.tmp.map(book =>
                        <Book book={book}
                              key={book.id}
                              click={this.change.bind(this)}
                        />
                    )}
                </ol>
              </div>

          </div>
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
