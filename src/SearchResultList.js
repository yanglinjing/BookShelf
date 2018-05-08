import React from 'react'
import Book from './Book.js'

class SearchResultList extends React.Component {
  render(){
    return(
      <div className="search-books-results">
        <ol className="books-grid">
            {this.props.results.map(book =>
                <Book book={book}
                      key={book.id}
                      click={this.change.bind(this)}
                />
            )}
        </ol>
      </div>
    )
  }
}

export default SearchResultList
