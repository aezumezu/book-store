import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

class Home extends React.Component {
  render() {
    const books = this.props.books;
    return (
      <div className="display-area">
        {books.map(book => <Book {...book} />)}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(Home);