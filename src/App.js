import React from 'react';
import Menu from './components/Menu';
import Timeline from './components/Timeline';
import Article from './components/Article';
import articles from './data/articles';

function App() {
  return (
    <main className="main">
      <Menu />
      <Timeline articles={articles} />
      <Article />
    </main>
  );
}

export default App;
