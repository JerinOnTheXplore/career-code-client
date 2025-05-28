import React from 'react';

const AddJob = () => {

  const handleAddJob = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
    return (
        <div>
          <div className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-br from-blue-100 to-blue-50 shadow-xl rounded-3xl border border-blue-200">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Add New Job</h2>
      <form onSubmit={handleAddJob} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900">
        
        {/* Title */}
        <div>
          <label className="font-semibold">Job Title</label>
          <input type="text" name="title" className="input input-bordered w-full mt-1" required />
        </div>

        {/* Location */}
        <div>
          <label className="font-semibold">Location</label>
          <input type="text" name="location" className="input input-bordered w-full mt-1" required />
        </div>

        {/* Job Type */}
        <div>
          <label className="font-semibold">Job Type</label>
          <select name="jobType" className="select select-bordered w-full mt-1" required>
            <option>Onsite</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <input type="text" name="category" className="input input-bordered w-full mt-1" required />
        </div>

        {/* Deadline */}
        <div>
          <label className="font-semibold">Application Deadline</label>
          <input type="date" name="applicationDeadline" className="input input-bordered w-full mt-1" required />
        </div>

        {/* Salary */}
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="font-semibold">Min Salary</label>
            <input type="number" name="minSalary" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label className="font-semibold">Max Salary</label>
            <input type="number" name="maxSalary" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label className="font-semibold">Currency</label>
            <input type="text" name="currency" defaultValue="bdt" className="input input-bordered w-full mt-1" required />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="font-semibold">Company Name</label>
          <input type="text" name="company" className="input input-bordered w-full mt-1" required />
        </div>

        {/* Company Logo */}
        <div>
          <label className="font-semibold">Company Logo URL</label>
          <input type="url" name="company_logo" className="input input-bordered w-full mt-1" required />
        </div>

        {/* HR Name */}
        <div>
          <label className="font-semibold">HR Name</label>
          <input type="text" name="hr_name" className="input input-bordered w-full mt-1" required />
        </div>

        {/* HR Email */}
        <div>
          <label className="font-semibold">HR Email</label>
          <input type="email" name="hr_email" className="input input-bordered w-full mt-1" required />
        </div>

        {/* Status */}
        <div>
          <label className="font-semibold">Status</label>
          <select name="status" className="select select-bordered w-full mt-1" required>
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Requirements */}
        <div className="md:col-span-2">
          <label className="font-semibold">Requirements (comma separated)</label>
          <textarea name="requirements" className="textarea textarea-bordered w-full mt-1" placeholder="e.g. JavaScript, React, Node.js" required></textarea>
        </div>

        {/* Responsibilities */}
        <div className="md:col-span-2">
          <label className="font-semibold">Responsibilities (comma separated)</label>
          <textarea name="responsibilities" className="textarea textarea-bordered w-full mt-1" placeholder="e.g. Develop software, Team collaboration" required></textarea>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="font-semibold">Job Description</label>
          <textarea name="description" className="textarea textarea-bordered w-full mt-1" rows="4" required></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-4">
          <input
            type="submit"
            value="Add Job"
            className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg transition duration-300 px-10"
          />
        </div>
      </form>
    </div>   
        </div>
    );
};

export default AddJob;