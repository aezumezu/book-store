import React from 'react';
import { Link } from 'react-router';

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
  <span className="text">{props.datePublished}
    {console.log('rarints', `${(props.rating/5) * 100}%`)}
    <div className="star-ratings-css">
      <div className="star-ratings-css-top"
        style={{width:`${(props.rating/5) * 100}%`}}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="star-ratings-css-bottom">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  </span>
</div>

export default Book;