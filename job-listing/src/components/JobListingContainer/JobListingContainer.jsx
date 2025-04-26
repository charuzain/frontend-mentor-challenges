import React from 'react';
import Tools from '../Tools/Tools';

const JobListingContainer = ({ jobListing }) => {
  console.log(jobListing);
  return (
    <>
      {jobListing.map((job) => (
        <div key={job.id}>
          <div>
            <img src={job.logo} alt={`${job.company} logo`} />
          </div>

          <div>
            <div>
              <p>{job.company} </p>
            </div>
            <div>{job.position}</div>
            <div>
              <span>{job.postedAt}</span>
              <span>{`. ${job.contract}`}</span>
              <span>{`. ${job.location}`}</span>
            </div>
          </div>
          {/* third */}

          <div>
            {job.languages.map((language, index) => (
              <p key={index}>{language}</p>
            ))}
            <p>{job.level}</p>
            <p>{job.role}</p>
            {job.tools.length > 0 && <Tools tools={job.tools} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default JobListingContainer;
