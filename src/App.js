import React from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import TopNav from './components/TopNav/TopNav';
import NewsFeed from './components/NewsFeed/NewsFeed';
import WatchList from './Pages/WatchList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
      return (
        <Router>
          <div className="App">
            <LeftNav/>
            <TopNav/>
            <NewsFeed/>
            <Switch>
                <Route path="/watchlist" component={WatchList} />
            </Switch>
          </div>
       </Router>
    );
  }
}

export default App;
