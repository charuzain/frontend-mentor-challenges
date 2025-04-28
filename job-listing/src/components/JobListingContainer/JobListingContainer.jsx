import React from 'react';
import Tools from '../Tools/Tools';
import styles from '../JobListingContainer/JobListingContainer.module.css';

const JobListingContainer = ({ listings, addFilterHandler }) => {
  return (
    <section className={styles['joblist-container']}>
      {listings.map((job) => (
        <div
          key={job.id}
          className={`${styles['joblist-card']} ${
            job.featured ? styles['card-border'] : ''
          }`}
        >
          <div className={styles['logo-container']}>
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className={styles['logo']}
            />
          </div>

          <div className={styles['job-description']}>
            <div className={styles['row']}>
              <p className={styles['company-name']}>{job.company} </p>
              {job.new && <p className={styles['new']}>New!</p>}
              {job.featured && <p className={styles['featured']}>Featured</p>}
            </div>
            <div className={styles['position']}>{job.position}</div>
            <div className={styles['job-details']}>
              <p className={styles['job-item']}>{job.postedAt}</p>
              <p className={styles['job-item']}>{job.contract}</p>
              <p className={styles['job-location']}>{job.location}</p>
            </div>
          </div>
          {/* third */}

          <div className={styles['keyword-container']}>
            {job.languages.map((language, index) => (
              <p
                key={index}
                className={styles['keyword']}
                onClick={() => addFilterHandler(language)}
              >
                {language}
              </p>
            ))}
            <p
              className={styles['keyword']}
              onClick={() => addFilterHandler(job.level)}
            >
              {job.level}
            </p>
            <p
              className={styles['keyword']}
              onClick={() => addFilterHandler(job.role)}
            >
              {job.role}
            </p>
            {job.tools.length > 0 && (
              <Tools tools={job.tools} addFilterHandler={addFilterHandler} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default JobListingContainer;
