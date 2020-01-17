import React from 'react';
import Menu from '../components/Menu';
import Timeline from '../components/Timeline';
import Article from '../components/Article';
import Panel from '../components/Panel';
import articles from '../data/articles';
import users from '../data/users';

class Forum extends React.Component {
    render() {
      return (
        <main className="main">
          <Menu />
          <Panel />
          <Timeline articles={articles} users={users} />
          <Article articles={articles} users={users} />
        </main>
      );
    }
  }

  export default Forum;