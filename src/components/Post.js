import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <article class="post" >
          <p class="post-title">TITLE</p>
          <div class="category">
            <div class="category-item snowboard"></div>
            <div class="category-item ski"></div>
            <div class="category-item skateboard"></div>
          </div>
          <div class="info">
            <div class="info-wrap">
              <p class="info__tag">TAGS</p>
              <p class="info__date">semptember</p>
            </div>
            <div class="info-wrap">
              <a class="info__flame" href="#">
                <img src="assets/images/icon_flame.svg" />
              </a>
              <a class="info__user" href="#"></a>
            </div>
          </div>
      </article>
    );
  }
}

export default Post;
