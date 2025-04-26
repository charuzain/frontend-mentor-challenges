import React from 'react';

const Tools = ({ tools }) => {
  return (
    <>
      {tools.map((tool, index) => (
        <div key={index}>{tool}</div>
      ))}
    </>
  );
};

export default Tools;
