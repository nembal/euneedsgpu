'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button } from './ui/button';
import countries from './countries.json'; // Import the countries.json

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    company: '',
    jobTitle: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, country, company, jobTitle } = formData;

    const { data, error } = await supabase
      .from('signups')
      .insert([{ first_name: firstName, last_name: lastName, email, country, company, job_title: jobTitle }]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow" id="signup">
      <h2 className="text-2xl font-bold mb-4 font-inter">How do I get GPU in Europe?</h2>
      <p className="mb-8 font-inter font-normal">Reach out to us and we will get you started.</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="company"
            placeholder="Company *"
            value={formData.company}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title *"
            value={formData.jobTitle}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <Button type="submit" variant="default" size="default" className="mt-4">Submit</Button>
      </form>
    </div>
  );
};

export default SignupForm;