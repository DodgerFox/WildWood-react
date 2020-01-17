import React, {Component} from 'react';
import User from '../assets/images/user.jpg'

class Post extends React.Component {
  render() {
    const {article} = this.props;
    const cats = article.cats;
    const categories = cats.map(category =>
      <div className = {"category-item " + category}></div>
    )
    const hot = (article.hot) ? 
      <a class="info__flame" href="#">
          <img src="assets/images/icon_flame.svg" />
      </a> : '';
    
    return (
      <article class="post" >
          <p class="post-title">{article.title}</p>
          <div class="category">
            {/* <div class="category-item snowboard"></div>
            <div class="category-item ski"></div>
            <div class="category-item skateboard"></div> */}
            {categories}
          </div>
          <div class="info">
            <div class="info-wrap">
              <p class="info__tag">{article.tags}</p>
              <p class="info__date">{article.date}</p>
            </div>
            <div class="info-wrap">
              {hot}
              <a class="info__user" href="#" style={{ backgroundImage: `url(${User})` }}></a>
            </div>
          </div>
      </article>
    );
  }
}

export default Post;
