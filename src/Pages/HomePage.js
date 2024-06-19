import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/Newslice';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ category, page }));
  }, [dispatch, category, page]);

  return (
    <div className="container">
      <h1 className="text-center my-3">Top Headlines</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default HomePage;
