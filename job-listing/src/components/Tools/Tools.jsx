import React from 'react';
import styles from '../Tools/Tools.module.css';

const Tools = ({ tools }) => {
  return (
    <>
      {tools.map((tool, index) => (
        <div key={index} className={styles['keyword']}>
          {tool}
        </div>
      ))}
    </>
  );
};

export default Tools;
