import React from 'react';

const Container = ({ children, id }) => {
  return (
    <div id={id} className="px-6 lg:px-28 md:px-10 mb-20">
      {children}
    </div>
  );
};

export default Container;
