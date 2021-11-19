import React from 'react';

const Container = ({ children, id }) => {
  return (
    <div id={id} className="px-10 lg:px-28 md:px-10 mb-16">
      {children}
    </div>
  );
};

export default Container;
