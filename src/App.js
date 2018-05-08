import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import Book from './Book.js'

import SearchBar from './SearchBar'



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

  search(event){
    BooksAPI.search(event.target.value).then(data=>
       this.setState({tmp:data})
     )
  }

  render() {
    return (
      <div className="app">

        {/*使用<Route>渲染第一个div*/}
        <Route path='/search' render={() =>(
              <SearchBar/>
        )}/>


        {/*使用<Route>渲染第二个div*/}
        <Route exact path='/' render={() =>(
          <div className="list-books">

            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              {/*{JSON.stringify(this.state.books)}*/}
                <BookShelf
                    books={this.state.books.filter(book=>
                      book.shelf ==='currentlyReading'
                    )}
                    title={'Currently Reading'}
                    click={this.change.bind(this)}
                />

                <BookShelf
                    books={this.state.books.filter(book=>
                      book.shelf ==='read'
                    )}
                    title={'Have Read'}
                    click={this.change.bind(this)}
                />

                <BookShelf
                    books={this.state.books.filter(book=>
                      book.shelf ==='wantToRead'
                    )}
                    title={'Want to Read'}
                    click={this.change.bind(this)}
                />

            </div>

            <div className="open-search">
                {/*使用<Link>链接到Search页面*/}
                <Link to='/search'>Add a book</Link>
            </div>

          </div>
        )}/>


      </div>
    )
  }
}

export default BooksApp
