import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container mx-auto max-w-1280 p-4">
      {children}
    </div>
  );
};

export default Container;
