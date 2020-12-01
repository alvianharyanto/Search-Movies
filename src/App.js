import React from 'react';
import Footer from './components/Footer'
import Search from './components/Search'
import Home from './views/Home'
import SearchPage from './views/SearchPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <header className="header">
            <h1 className="header__title">Movies</h1>
            <Search />
          </header>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/SearchPage">
              <SearchPage/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
