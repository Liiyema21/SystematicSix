import React, { useState } from 'react';
import backtruck from '../ClientAssets/truck4.jpg';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase';

const LogInFormClient = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
   if (Object.keys(formErrors).length === 0) {
      try {
        // Authenticate user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        console.log('User logged in:', user);
        navigate('/ClientHome');
      } catch (error) {
        console.error('Error logging in:', error);
        setErrors({ firebase: error.message });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex h-screen">
          <div className="mb-4 flex justify-start">
            <Link to='/'>
              <FaArrowLeft size={25} />
            </Link>
          </div>
      <div className="flex-1 flex items-center justify-center bg-white py-2">
        
        <div className="w-full max-w-md px-4 py-6 rounded-md shadow-lg">
          <div>
            <h1 className="py-4 text-[#131a4b] text-3xl font-bold text-center">Log In</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-medium text-gray-500">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                placeholder="Enter email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="font-medium text-gray-500">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="text-center">
              <button type="submit" className="bg-[#131a4b] px-4 rounded-md text-white font-bold py-2">
                Log In
              </button>
            </div>
            <label className='px-2 text-center block'>
              Don't have an account?  
              <Link to='/SignUpFormClient' className='hover:text-amber-500 px-2 text-[#131a4b] font-semibold'>
                Sign Up
              </Link>
            </label>
          </form>
        </div>
      </div>

      {/* Right Half: Background Image */}
      <div
        className="flex-1 bg-cover bg-center h-full flex items-center justify-center"
        style={{ backgroundImage: `url(${backtruck})` }}
      >
        <h1 className="text-5xl font-bold text-white text-center">Pack It Buddy</h1>
      </div>
    </div>
  );
};

export default LogInFormClient;
