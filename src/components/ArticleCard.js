import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      <img src={article.urlToImage} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <Link to={`/article/${article.title}`} state={{ article }} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
