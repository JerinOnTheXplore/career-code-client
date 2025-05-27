import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
 const job = useLoaderData();
 const {
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;
    return (
    <div>
     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-md shadow-2xl rounded-[2rem] p-8 relative overflow-hidden border border-blue-200">
        
        {/* Water Drop Background Overlay */}
        <div className="absolute -top-10 -right-10 h-52 w-52 bg-blue-300 opacity-30 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-16 -left-10 h-72 w-72 bg-blue-200 opacity-40 rounded-full blur-2xl z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{title}</h1>
              <p className="text-blue-700 font-semibold">{company}</p>
            </div>
            <img src={company_logo} alt="logo" className="h-14 w-14 object-contain rounded-full border border-blue-300" />
          </div>

          <div className="flex flex-wrap gap-2 mb-4 text-sm">
            <span className="badge badge-outline text-blue-600">{location}</span>
            <span className="badge badge-outline text-blue-600">{jobType}</span>
            <span className="badge badge-outline text-blue-600">{category}</span>
            <span className="badge badge-outline text-blue-600">Deadline: {applicationDeadline}</span>
          </div>

          <p className="text-gray-800 leading-relaxed mb-4">{description}</p>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">Salary Range:</h2>
            <p className="text-gray-700">{salaryRange?.min} - {salaryRange?.max} BDT</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">HR Contact:</h2>
            <p className="text-gray-700">{hr_name} ({hr_email})</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">Responsibilities:</h2>
            <ul className="list-disc pl-5 text-gray-800">
              {responsibilities?.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-1">Requirements:</h2>
            <ul className="list-disc pl-5 text-gray-800">
              {requirements?.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div className="text-center">
            <button className="btn btn-ghost bg-blue-300 btn-wide">Apply Now</button>
            <Link to="/">
            <button className="btn btn-ghost bg-blue-300 btn-wide">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>   
    </div>
    );
};

export default JobDetails;