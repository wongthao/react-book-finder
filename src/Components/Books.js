import React, { Component } from 'react';
import BookItem from './BookItem';


class Books extends Component {
  render(props) {
    let { books } = this.props;
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
