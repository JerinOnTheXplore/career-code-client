import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({myApplicationsPromise}) => {
  const applications = use(myApplicationsPromise);
    return (
<div>
 <h3 className='text-3xl'>Jobs applied so far: {applications.length}</h3>
 <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <tbody>
     {
      applications.map((application,index)=>
        <JobApplicationRow
        application={application}
        index={index}
        key={application._id}
        >   
        </JobApplicationRow>
      )
     } 
    </tbody>
    
  </table>
</div>   
</div>
    );
};

export default ApplicationList;