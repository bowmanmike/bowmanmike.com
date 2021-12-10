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
    <div className="grid grid-flow-col md:w-2/3 md:mx-auto">
      <Link
        className={`${
          !hasPrevPage ? 'pointer-events-none bg-gray-300' : ''
        } border border-gray-400 py-2 px-4 hover:bg-sage-100 text-center`}
        disabled={!hasPrevPage}
        to={`${base}/${prevPage > 1 ? prevPage : ''}`}
      >
        &#8592;<span className="hidden md:inline"> Prev</span>
      </Link>
      {/* TODO: Will need to limit the number of pages shown here eventually. Seems to break on mobile when there's 5+ pages */}
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          to={`${base}/${i > 0 ? i + 1 : ''}`}
          key={`page-${i}`}
          className={`border border-gray-400 py-2 px-4 text-center ${
            i + 1 === currentPage ? 'bg-sage-100' : ''
          }`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        className={`${
          !hasNextPage ? 'pointer-events-none bg-gray-300' : ''
        } border border-gray-400 px-4 py-2 hover:bg-sage-100 text-center`}
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        <span className="hidden md:inline">Next </span>&#8594;
      </Link>
    </div>
  );
}
