import React from 'react';

const Title = ({ name }) => {
  return (
    <div className="mb-20 text-center text-3xl sm:text-4xl underline font-bold">
      {name}
    </div>
  );
};

export default Title;
