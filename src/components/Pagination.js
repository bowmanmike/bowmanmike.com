import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <div>
      <Link
        className={`${!hasPrevPage ? 'pointer-events-none' : ''}`}
        disabled={!hasPrevPage}
        to={`${base}/${prevPage > 1 ? prevPage : ''}`}
      >
        &#8592;<span className="word"> Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link to={`${base}/${i > 0 ? i + 1 : ''}`} key={`page-${i}`}>
          {i + 1}
        </Link>
      ))}
      <Link
        className={`${!hasNextPage ? 'pointer-events-none' : ''}`}
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        <span className="word">Next </span>&#8594;
      </Link>
    </div>
  );
}
