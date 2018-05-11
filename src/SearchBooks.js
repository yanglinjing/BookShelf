import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book.js'
import * as _ from "lodash"


class SearchBooks extends React.Component {
  state = {
        searchResults: []
  }

  whetherOnShelf(shelfBooks, searchResults){
      searchResults.map(searchResult => {
            const resultInShelf = shelfBooks.find(
                    shelfBook => shelfBook.id === searchResult.id
            );
            searchResult.shelf = resultInShelf ? resultInShelf.shelf : 'none';
            }
      )
  }

  updateQuery = _.debounce(query => {
     query &&
       BooksAPI.search(query).then(data => {
         if (Array.isArray(data)) {
           this.setState({ searchResults: data });
         } else {
           this.setState({ searchResults: [] });
         }
       });
  }, 400);

  render(){
    return(
      <div className="search-books">

          <div className="search-books-bar">

            {/*使用<Link>链接到list页面*/}
            <Link to='/' className="close-search">Close</Link>

            {/*输入搜索内容*/}
            <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={event => this.updateQuery(event.target.value)}
              />
            </div>

          </div>

          {/*输入搜索内容*/}
          <div className="search-books-results">
            <ol className="books-grid">
                {this.whetherOnShelf(this.props.books, this.state.searchResults)}
                {this.state.searchResults.map(book =>
                    <Book book={book}
                          key={book.id}
                          click={this.props.change}
                    />
                )}
            </ol>
          </div>

      </div>
    )
  }
}

export default SearchBooks
