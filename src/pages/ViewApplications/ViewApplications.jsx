import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
  const {job_id}=useParams();
  const applications = useLoaderData();
 const handleStatusChange = (e,app_id) =>{
  console.log(e.target.value,app_id);

  axios.patch(`http://localhost:3000/application/${app_id}`,{status: e.target.value})
  .then(res=>{
   console.log(res.data);
   if(res.data.modifiedCount){
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Application status updated",
  showConfirmButton: false,
  timer: 1500
});
   }
  })
  .catch(error => console.log(error));

 } 
    return (
    <div>
     <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center drop-shadow-md">
        {applications.length} Applications for Job: {job_id}
      </h2>

      <div className="overflow-x-auto rounded-xl backdrop-blur-md bg-white shadow-xl">
        <table className="min-w-[800px] w-full text-sm md:text-base text-blue-500">
          {/* Table Head */}
          <thead className="bg-white text-blue-500 text-base font-semibold">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left min-w-[180px]">Applicant Email</th>
              <th className="px-6 py-4 text-left min-w-[200px]">LinkedIn</th>
              <th className="px-6 py-4 text-left min-w-[180px]">GitHub</th>
              <th className="px-6 py-4 text-left min-w-[200px]">Resume</th>
              <th className="px-6 py-4 text-left min-w-[200px]">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {applications.map((application, index) => (
              <tr
                key={application._id}
                className="hover:bg-blue-100/50 transition duration-200 ease-in-out"
              >
                <td className="px-6 py-4 text-center">{index + 1}</td>
                <td className="px-6 py-4">{application.applicant}</td>
                <td className="px-6 py-4 text-blue-500 underline">
                  <a href={application.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </td>
                <td className="px-6 py-4 text-blue-500 underline">
                  <a href={application.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </td>
                <td className="px-6 py-4 text-blue-500 underline">
                  <a href={application.resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </td>
                <td>
                 <select onChange={e=> handleStatusChange(e,application._id)} defaultValue={application.status} className="select">
                 <option disabled={true}>Update Status</option>
                 <option>Pending</option>
                 <option>Interview</option>
                 <option>Hired</option>
                 <option>Rejected</option>
                 </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    );
};

export default ViewApplications;