import React from 'react';

const IndexContainer = ({ children, headerText }) => (
  <div className="border border-gray-400 lg:p-4 lg:mx-0 shadow-md m-4 p-2">
    <h2 className="text-2xl border-sage border-b-4 max-w-max pr-8 mb-4">
      {headerText}
    </h2>
    {children}
  </div>
);

export default IndexContainer;
