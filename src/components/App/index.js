import React from 'react';
import Nav from './nav';
class App extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="store-sign">
          <h1>Sync BookStore</h1>
          <p><em>...learning abounds.</em></p>
        </div>
        <Nav />
      </div>
    );
  }
};

export default App;