import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <section class="article">
        <div class="article-header">
          <div class="author">
            <div class="author__avatar">
              <div class="author-cat">
                <div class="author-cat__item snowboard"></div>
              </div>
            </div>
            <p class="author-name">name</p>
          </div>
        </div>
        <div class="content">
          <div class="content-wrap">
            <div class="content-info">
              <p class="content-info__item">date</p>
              <p class="content-info__item">10 просмотров</p>
              <p class="content-info__item">2 комментария</p>
            </div>
            <div class="content-body">
              <h1>title</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              <img src="assets/images/image.jpg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
