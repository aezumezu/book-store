import React from 'react';
import { connect } from 'react-redux';
import BookView from './BookView';

class BookDetails extends React.Component {
  getBookInfo() {
    const bookId = this.props.params.bookId;
    const description = this.props.bookDetails[bookId].description;
    const info = this.props.books.filter(book => bookId === book.id);
    return Object.assign({}, ...info, { description });
  }

  render() {
    return (
      <div className="display-area">
        <BookView bookInfo={this.getBookInfo()} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    bookDetails: state.bookDetails,
    books: state.books
  }
}

export default connect(mapStateToProps)(BookDetails);