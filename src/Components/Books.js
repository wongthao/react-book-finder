import React, { Component } from 'react';
import BookItem from './BookItem';


class Books extends Component {
  render(props) {
    let { books } = this.props;
    if (!books) {
      return <h2>Sorry, no books found by this title</h2>
    }
    
      return (
        <div> 
          {books.map((book, i) => {
            return <BookItem book={book} key={i} />
          })}
        </div>
      );
  }
}

export default Books;
