import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
    <div className='text-center'>
     <ApplicationStats/>
     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <ApplicationList/>  
    </Suspense>  
    </div>
    );
};

export default MyApplications;