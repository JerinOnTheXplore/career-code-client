import React from 'react';
import { Link } from 'react-router';

const JobCard = ({job}) => {
  const {
    title,
    _id,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;
    return (
    <div>
     <div className="relative bg-white border rounded-t-[40px] rounded-br-[40px] shadow-xl hover:shadow-2xl transition overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full   bg-gradient-to-b from-blue-400 to-blue-600 rounded-s-lg"></div>
      
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-blue-900">{title}</h2>
            <p className="text-sm text-blue-600 font-medium">{company}</p>
          </div>
          <img src={company_logo} alt="Logo" className="h-12 w-12 object-contain rounded-md border" />
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-blue-700">
          <span className="badge badge-outline">{location}</span>
          <span className="badge badge-outline">{jobType}</span>
          <span className="badge badge-outline">{category}</span>
          <span className="badge badge-outline">Deadline: {applicationDeadline}</span>
        </div>
        <div className="mt-4">
          <p className="text-sm text-blue-800">
            <strong>Salary:</strong> {salaryRange?.min} - {salaryRange?.max} BDT
          </p>
          <p className="text-sm text-blue-800">
            <strong>HR:</strong> {hr_name} ({hr_email})
          </p>
        </div>

        <details className="mt-3 collapse collapse-arrow bg-blue-50 border">
          <summary className="collapse-title text-sm font-medium text-blue-900">Responsibilities</summary>
          <ul className="collapse-content list-disc pl-5 text-sm text-blue-800">
            {responsibilities?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </details>

        <details className="mt-2 collapse collapse-arrow bg-blue-50 border">
          <summary className="collapse-title text-sm font-medium text-blue-900">Requirements</summary>
          <ul className="collapse-content list-disc pl-5 text-sm text-blue-800">
            {requirements?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </details>

        <div className="mt-5 text-right">
          <Link to={`/jobs/${_id}`}>
          <button className="btn btn-sm btn-ghost bg-blue-300  rounded-lg w-full">Show Details</button>
          </Link>
        </div>
      </div>
    </div> 
    </div>
    );
};

export default JobCard;