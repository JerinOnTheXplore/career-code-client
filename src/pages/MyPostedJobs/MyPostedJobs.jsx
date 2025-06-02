import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobLists from './JobLists';
import useJobApi from '../../api/useJobApi';


const MyPostedJobs = () => {
  const {user} = UseAuth();
  const {jobsCreatedByPromise} = useJobApi();
    return (
    <div>
      <Suspense>
       <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email,user.accessToken)}></JobLists>
      </Suspense>
    </div>
    );
};

export default MyPostedJobs;