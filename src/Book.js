import React from 'react'

class Book extends React.Component{

    render(){

      {/*ES6解构*/}
      const {imageLinks} = this.props.book;
      const {authors} = this.props.book;

        return(
          <li>
            <div className="book">
              <div className="book-top">

                <div className="book-cover"
                    style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${imageLinks ? imageLinks.thumbnail : 'img/noCover.jpg'}")` }}>
                </div>

                <div className="book-shelf-changer">
                  <select value={this.props.book.shelf}
                          onChange={event =>
                            this.props.click(this.props.book, event.target.value)}
                    >
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

                {authors && authors.map(author =>
                    <div className="book-authors" key={author}>{author}</div>
                )}

            </div>
          </li>
        )
    }
}

export default Book
