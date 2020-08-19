import React from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import TopNav from './components/TopNav/TopNav';
import WatchList from './Pages/WatchList';
import Main from './Pages/Main';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
      return (
        <Router>
          <div className="App">
              <TopNav/>
              <LeftNav/>
              <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/watchlist" component={WatchList} />
              </Switch>
          </div>
         </Router>
    );
  }
}

export default App;
