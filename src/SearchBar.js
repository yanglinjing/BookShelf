import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResultList from './SearchResultList.js'

class SearchBar extends React.Component {

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">

          {/*使用<Link>链接到list页面*/}
          <Link to='/' className="close-search">Close</Link>

          <div className="search-books-input-wrapper">

            {/*搜索框*/}
            <input
                type="text"
                placeholder="Search by title or author"
                onChange={event =>
                    this.props.search(event)}
            />

          </div>
        </div>

        <SearchResultList results={this.props.tmp}/>
    </div>
    )
  }
}

export default SearchBar
