import React from 'react';
import { Link } from 'gatsby';

export default function NavButton({ href, content, icon, postIcon }) {
  const isDisabled = href === 'disabled';
  if (isDisabled)
    return (
      <button
        type="button"
        disabled
        className="pointer-events-none border border-gray-400 px-4 py-2 mb-4 inline-block hover:bg-sage-100 shadow-md"
      >
        {content}
      </button>
    );

  return (
    <Link
      to={href}
      className="border border-gray-400 px-4 py-2 mb-4 inline-block hover:bg-sage-100 shadow-md"
    >
      <p className="flex items-center justify-center">
        {icon}
        {content}
        {postIcon}
      </p>
    </Link>
  );
}
