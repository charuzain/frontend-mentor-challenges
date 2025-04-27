import React from 'react';
import styles from '../Tools/Tools.module.css';

const Tools = ({ tools, addFilterHandler }) => {
  return (
    <>
      {tools.map((tool, index) => (
        <div
          key={index}
          className={styles['keyword']}
          onClick={() => addFilterHandler(tool)}
        >
          {tool}
        </div>
      ))}
    </>
  );
};

export default Tools;
