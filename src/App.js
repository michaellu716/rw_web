import React from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import TopNav from './components/TopNav/TopNav';
import NewsFeed from './components/NewsFeed/NewsFeed';

function App() {
  return (
    <div className="App">
      <LeftNav/>
      <TopNav/>
      <NewsFeed/>
    </div>
  );
}

export default App;
