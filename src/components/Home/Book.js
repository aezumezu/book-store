import React from 'react';
import { Link } from 'react-router';
import Rating from '../Imports/ratings';

const Book = (props) => <div className="book-select">
  <div className="book-thumbnail">
    <Link to={`/books/${props.id}`}>
      <img src={`assets/book_covers/${props.thumbnail}`} />
    </Link>
  </div>
  <span className="text" >{props.author}</span>
  <Link className="text" to={`/books/${props.id}`}>
    <span>{props.title}</span>
  </Link>
  <span className="text">{props.datePublished}</span>
  <span className="text"><Rating rating={props.rating} /></span>
</div>

export default Book;