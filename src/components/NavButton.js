import React from 'react';
import { Link } from 'gatsby';

export default function NavButton({ href, content, icon, postIcon }) {
  const isDisabled = href === 'disabled';
  return (
    <Link
      to={!isDisabled ? href : ''}
      disabled={isDisabled}
      className={`${
        isDisabled ? 'pointer-events-none' : ''
      } border border-gray-400 px-4 py-2 mb-4 inline-block hover:bg-sage-100 shadow-md`}
    >
      <p className="flex items-center justify-center">
        {icon}
        {content}
        {postIcon}
      </p>
    </Link>
  );
}
