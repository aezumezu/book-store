// import libraries
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// import custom components
import App from './components/App';
import Home from './components/Home';
import BookDetail from './components/BookDetails';

// import page styles
import './styles/styles.css';

import store, { history } from './store';

function redirectToHome() {
  window.location.href = '/';
}

const main = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/books/:bookId" component={BookDetail} />
        <Route path="*" onEnter={redirectToHome} />
      </Route>
    </Router>
  </Provider>
);

render(main, document.getElementById('root'));
