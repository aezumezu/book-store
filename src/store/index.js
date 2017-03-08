import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers';

import books from '../data/book_list';
import bookDetails from '../data/book_details';

const defaultState = {
  books,
  bookDetails
};

// no reducer yet, hence the underscore
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;