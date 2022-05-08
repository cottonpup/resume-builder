import React from 'react';

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 className="text-3xl text-center mb-8">{children}</h1>;
};

export default Title;
