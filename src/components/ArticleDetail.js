import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticleDetail = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="img-fluid" />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Read Full Article
      </a>
    </div>
  );
};

export default ArticleDetail;
