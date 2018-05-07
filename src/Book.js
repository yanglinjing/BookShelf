import React from 'react'

class Book extends React.Component{
    render(){
        return(
          <li>
            <div className="book">
              <div className="book-top">

                <div className="book-cover"
                    style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}>
                </div>

                <div className="book-shelf-changer">
                  <select value={this.props.book.shelf}
                          onChange={event => this.props.click(this.props.book, event.target.value)}
                    >{/*修改默认值*/}
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>

              </div>

              {/*书名*/}
              <div className="book-title">{this.props.book.title}</div>

              {/*不止一个作者，而是一个数组*/}
              if(this.props.book.authors)
                {this.props.book.authors.map(author =>
                    <div className="book-authors" key={author}>{author}</div>
                )}

            </div>
          </li>
        )
    }
}

export default Book
