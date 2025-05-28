import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';

const JobApply = () => {
  const {id: jobId} = useParams();
  const {user} = UseAuth();
  console.log(user,jobId);

  const handleApplyFormSubmit = e=>{
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin,github,resume);
  }
    return (
        <div>
        <div className="max-w-xl mx-auto bg-gradient-to-br from-blue-100 via-blue-50 to-white p-10 rounded-2xl shadow-xl mt-12">
  <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Apply for this job : <Link to={`/jobs/${jobId}`}>details</Link></h2>

  <form onSubmit={handleApplyFormSubmit} className="space-y-6">
    {/* LinkedIn */}
    <div>
      <label className="block text-blue-800 font-semibold mb-1">LinkedIn Profile</label>
      <input
        type="url"
        name="linkedin"
        placeholder="https://linkedin.com/in/yourprofile"
        className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* GitHub */}
    <div>
      <label className="block text-blue-800 font-semibold mb-1">GitHub Profile</label>
      <input
        type="url"
        name="github"
        placeholder="https://github.com/yourusername"
        className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Resume */}
    <div>
      <label className="block text-blue-800 font-semibold mb-1">Resume Link</label>
      <input
        type="url"
        name="resume"
        placeholder="https://your-resume-link.com"
        className="input input-bordered w-full bg-white focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Submit */}
    <div className="text-center pt-4">
    <input
  type="submit"
  value="Apply"
  className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg transition duration-300 px-8"
/>
    </div>
  </form>
</div>   
        </div>
    );
};

export default JobApply;