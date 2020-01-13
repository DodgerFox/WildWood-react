import React from 'react';
import Post from './Post';

export default function Timeline ({articles}) {
  const articleList = articles.map(article => 
    <Post key = {article.id} article = {article} />
  )
  return (
      <section class="timeline">
        <div class="search">
          <div class="search-input">
            <img class="search__icon" src="../assets/images/icon_search.svg" />
            <input type="search" placeholder="Кто ищет - тот найдет" />
          </div>
        </div>
        
        <div class="timeline-body">
          {articleList}
        </div>
      </section>
    );
}
