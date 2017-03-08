// import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

// import custom components
import App from './components/App';
import Home from './components/Home';
import BookDetail from './components/BookDetails';

// import page styles
import './styles/styles.css';

function redirectToHome() {
  window.location.href = "/";
}
const router = <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/book/:bookid" component={BookDetail} />
    <Route path="*" onEnter={redirectToHome} />
  </Route>
</Router>

ReactDOM.render(router, document.getElementById('root'));
