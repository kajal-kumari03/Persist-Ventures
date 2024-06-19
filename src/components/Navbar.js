import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/Newslice';

const categories = ['general', 'business', 'technology', 'entertainment', 'health', 'science', 'sports'];

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.news.category);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">NewsApp</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {categories.map((category) => (
            <li
              key={category}
              className={`nav-item ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => dispatch(setCategory(category))}
            >
              <a className="nav-link" href="#">{category.charAt(0).toUpperCase() + category.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
