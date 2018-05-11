import React from 'react'

function Book(props){

    const {imageLinks, authors, shelf} = props.book;

    return(
      <li>
        <div className="book">
          <div className="book-top">

            <div className="book-cover"
                style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${imageLinks ? imageLinks.thumbnail : require('./img/noCover.jpg')}")` }}>
            </div>{/*图片也需要导入*/}

            <div className="book-shelf-changer">
              <select value={shelf}
                      onChange={event =>
                        props.click(props.book, event.target.value)}
              >
                <option value="toMove" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Have Read</option>
                <option value="none">None</option>
              </select>
            </div>

          </div>

          {/*书名*/}
          <div className="book-title">{props.book.title}</div>

          {/*不止一个作者，而是一个数组*/}
          {/*&& 左边为真则进行右边*/}
            {authors && authors.map(author =>
                <div className="book-authors" key={author}>{author}</div>
            )}

        </div>
      </li>
    )
}

export default Book
