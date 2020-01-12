import React from 'react';
import Post from './Post';

export default function Timeline ({articles}) {
    return (
      <section class="timeline">
        <div class="search">
          <div class="search-input">
            <img class="search__icon" src="../assets/images/icon_search.svg" />
            <input type="search" placeholder="Кто ищет - тот найдет" />
          </div>
        </div>
        <div class="timeline-body">
          <Post />
        </div>
      </section>
    );
}
