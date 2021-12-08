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
    <div className="border  border-black p-2 max-w-max flex space-x-2 content-center items-center justify-center">
      <Link
        className={`${
          !hasPrevPage ? 'pointer-events-none' : ''
        } border border-gray-400 py-2 px-4`}
        disabled={!hasPrevPage}
        to={`${base}/${prevPage > 1 ? prevPage : ''}`}
      >
        &#8592;<span className="word"> Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          to={`${base}/${i > 0 ? i + 1 : ''}`}
          key={`page-${i}`}
          className={`border border-gray-400 py-2 px-4 ${
            i + 1 === currentPage ? 'bg-sage bg-opacity-60' : ''
          }`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        className={`${
          !hasNextPage ? 'pointer-events-none' : ''
        } border border-gray-400 px-4 py-2`}
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        <span className="word">Next </span>&#8594;
      </Link>
    </div>
  );
}
