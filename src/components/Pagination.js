import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/Newslice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.news.page);

  return (
    <div className="d-flex justify-content-center my-3">
      <button className="btn btn-secondary" onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>
        Previous
      </button>
      <span className="mx-2">Page {page}</span>
      <button className="btn btn-secondary" onClick={() => dispatch(setPage(page + 1))}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
