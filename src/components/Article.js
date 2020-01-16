import React from 'react';

class Article extends React.Component {
  
  constructor(props) {
    super(props);
    const articlesList = props.articles,
          userList = props.users;
    articlesList.forEach(article => {
      if (article.open){
        this.article = article
      }
    });  
    userList.forEach(user => {
      if (user.id === this.article.authorId){
        this.author = user
      }
    });

    const content = this.article.content;
    let readyContent = '';
    for (var elem in content) {
      let elemVal = content[elem];
      switch (elem) {
        case 'h1':
          readyContent = readyContent + '<h1>' + elemVal + '</h1>'
          break;
        case 'p':
          readyContent = readyContent + '<p>' + elemVal + '</p>'
          break;
        case 'img':
          readyContent = readyContent + '<img src="' + elemVal + '" />'
          break;
      }
    }
    this.content = readyContent;
    console.log(this.content);
    
          
  }

  render() {
    return (
      <section class="article">
        <div class="article-header" style={{ backgroundImage: `url(${this.article.cover})` }}>
          <div class="author">
            <div class="author__avatar" style={{ backgroundImage: `url(${this.author.avatar})` }}>
              <div class="author-cat">
                <div class="author-cat__item snowboard"></div>
              </div>
            </div>
            <p class="author-name">{ this.author.first + ' ' + this.author.last }</p>
          </div>
        </div>
        <div class="content">
          <div class="content-wrap">
            <div class="content-info">
              <p class="content-info__item">{ this.article.date }</p>
              <p class="content-info__item">{ this.article.views } просмотров</p>
              <p class="content-info__item">2 комментария</p>
            </div>
            <div class="content-body" dangerouslySetInnerHTML={{__html: this.content}}>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
