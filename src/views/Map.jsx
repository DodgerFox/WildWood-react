import React from 'react';
import Menu from '../components/Menu';
import Timeline from '../components/Timeline';
import articles from '../data/articles';
import users from '../data/users';

class Map extends React.Component {
    render() {
      return (
        <main className="main">
          <Menu />
          <Timeline articles={articles} users={users} />
        </main>
      );
    }
  }

  export default Map;