import React from 'react';
import Tools from '../Tools/Tools';
import styles from '../JobListingContainer/JobListingContainer.module.css';

const JobListingContainer = ({ jobListing }) => {
  return (
    <section className={styles['joblist-container']}>
      {jobListing.map((job) => (
        <div key={job.id} className={styles['joblist-card']}>
          <div className={styles['logo-container']}>
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className={styles['logo']}
            />
          </div>

          <div className={styles['job-description']}>
            <div>
              <p className={styles['company-name']}>{job.company} </p>
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
              <p key={index} className={styles['keyword']}>
                {language}
              </p>
            ))}
            <p className={styles['keyword']}>{job.level}</p>
            <p className={styles['keyword']}>{job.role}</p>
            {job.tools.length > 0 && <Tools tools={job.tools} />}
          </div>
        </div>
      ))}
    </section>
  );
};

export default JobListingContainer;
