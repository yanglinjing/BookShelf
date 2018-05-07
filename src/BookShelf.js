import React from 'react'
import Book from './Book'

class BookShelf extends React.Component{
    render(){
        return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {/*这个this.props.books的books，是App。js里，其父元素的books属性，是Array*/}
                  {this.props.books.map(book =>
                      <Book book={book}
                            key={book.id}
                            click={this.props.click}
                      />
                  )}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf
