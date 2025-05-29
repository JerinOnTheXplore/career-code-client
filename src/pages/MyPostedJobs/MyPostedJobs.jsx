import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsAPI';

const MyPostedJobs = () => {
  const {user} = UseAuth();
    return (
    <div>
      <Suspense>
       <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobLists>
      </Suspense>
    </div>
    );
};

export default MyPostedJobs;