import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Landing, RepoList, RepoDetail } from './';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/repos" component={RepoList} />
            <Route exact path="/repos/:repo" component={RepoDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;