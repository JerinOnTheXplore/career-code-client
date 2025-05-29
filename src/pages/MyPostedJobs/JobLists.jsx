import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({jobsCreatedByPromise}) => {  
  const jobs = use(jobsCreatedByPromise);
    return (
    <div>
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
  <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center drop-shadow-md">
    Jobs Created By You: {jobs.length}
  </h2>

  <div className="overflow-x-auto rounded-xl backdrop-blur-md bg-white shadow-xl">
    <table className="min-w-[800px] w-full text-sm md:text-base text-blue-700">
      {/* Table Head */}
      <thead className="bg-white text-blue-600 text-base font-semibold">
        <tr>
          <th className="px-6 py-4 text-left">No</th>
          <th className="px-6 py-4 text-left min-w-[150px]">Title</th>
          <th className="px-6 py-4 text-left min-w-[250px]">Description</th>
          <th className="px-6 py-4 text-center min-w-[150px]">Deadline</th>
          <th className="px-6 py-4 text-center min-w-[150px]">Job Type</th>
          <th className="px-6 py-4 text-center min-w-[200px]">Posted By</th>
          <th className="px-6 py-4 text-center min-w-[110px]">Actions</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {jobs.map((job, index) => (
          <tr
            key={job._id}
            className="hover:bg-blue-100/50 transition duration-200 ease-in-out"
          >
            <td className="px-6 py-4 text-center">{index + 1}</td>
            <td className="px-6 py-4 font-medium">{job.title}</td>
            <td className="px-6 py-4">{job.description}</td>
            <td className="px-6 py-4 text-center">{job.applicationDeadline}</td>
            <td className="px-6 py-4 text-center">{job.jobType}</td>
            <td className="px-6 py-4 text-center">{job.hr_email}</td>
            <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
    );
};

export default JobLists;