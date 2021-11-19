import React from 'react';

import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import Container from './Container';

const Carousel = ({
  children,
  currentIndex,
  setCurrentIndex,
  itemLen,
  maxItem,
}) => {
  const disabledRight = currentIndex === 0 ? true : false;
  const disabledLeft = itemLen === currentIndex + maxItem ? true : false;
  return (
    <div className="carousel px-10 lg:px-28 md:px-10 mb-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`}>
        {children}
      </div>
      <div
        className="icon-left"
        onClick={() =>
          disabledLeft ? '' : setCurrentIndex((prevState) => prevState + 1)
        }
      >
        <AiFillCaretLeft
          className={`icon ${disabledLeft ? 'disabled' : ''}`}
          fontSize={30}
        />
      </div>
      <div
        className="icon-right"
        onClick={() =>
          disabledRight ? '' : setCurrentIndex((prevState) => prevState - 1)
        }
      >
        <AiFillCaretRight
          fontSize={30}
          className={`icon ${disabledRight ? 'disabled' : ''}`}
        />
      </div>
    </div>
  );
};

export default Carousel;
