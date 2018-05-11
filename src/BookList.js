import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

function BookList(props){
    return(
      <div className="list-books">

        <div className="list-books-title">
            <h1>My Bookshelf</h1>
        </div>

        <div className="list-books-content">
          {/*{JSON.stringify(this.state.books)}*/}
            <BookShelf
                books={props.books.filter(book=>
                  book.shelf ==='currentlyReading'
                )}
                title={'Currently Reading'}
                click={props.change}
            />

            <BookShelf
                books={props.books.filter(book=>
                  book.shelf ==='read'
                )}
                title={'Have Read'}
                click={props.change}
            />

            <BookShelf
                books={props.books.filter(book=>
                  book.shelf ==='wantToRead'
                )}
                title={'Want to Read'}
                click={props.change}
            />

        </div>

        <div className="open-search">
            {/*使用<Link>链接到Search页面*/}
            <Link to='/search'>Add a book</Link>
        </div>

      </div>
    )
}

export default BookList
