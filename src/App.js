import React from 'react';
import Home from './views/Home'
import Search from './components/Search'
import Footer from './components/Footer'
import SearchPage from './views/SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* router */}
        <Router>
          <header className="header">
            <Link to="/">
              <h1 className="header__title">Movies</h1>
            </Link>
            <Search />
          </header>
          <Switch>
            <Route path="/search/:searchTerm">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
