import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import useApplicationApi from '../../api/useApplicationApi';




const MyApplications = () => {

  const {user} = UseAuth();
  const {myApplicationsPromise} = useApplicationApi();

  // console.log('Token in the context',user.accessToken);
    return (
    <div className='text-center'>
     <ApplicationStats/>
     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <ApplicationList 
      myApplicationsPromise={myApplicationsPromise(user.email)}
      ></ApplicationList>  
    </Suspense>  
    </div>
    );
};

export default MyApplications;