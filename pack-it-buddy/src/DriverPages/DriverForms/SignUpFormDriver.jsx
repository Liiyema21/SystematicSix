import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import backtruck from '../DriverAssets/truck4.jpg';

const SignUpFormDriver = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    if (!formData.firstName) newErrors.firstName = 'Name is required';
    if (!formData.surname) newErrors.surname = 'Surname is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
       
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        await set(ref(db, 'drivers/' + user.uid), {
          firstName: formData.firstName,
          surname: formData.surname,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
        });

        console.log('User signed up:', user);
        navigate('/DriverHome');
      } catch (error) {
        console.error('Error signing up:', error);
        setErrors({ firebase: error.message });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Half: Form */}
      <div className="flex-1 flex bg-white py-2">
        <div className="mb-4">
          <Link to='/'>
            <FaArrowLeft size={25} />
          </Link>
        </div>
        <div className=" px-4 py-4 rounded-md shadow-lg w-full h-screen max-w-md mx-auto flex-1">
          <div>
            <h1 className="py-4 text-[#131a4b] text-3xl font-bold text-center">Create an Account</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-medium text-gray-500">Name(s)</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                placeholder="Full Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div>
              <label className="font-medium text-gray-500">Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                placeholder="Surname"
              />
              {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
            </div>
            <div>
              <label className="font-medium text-gray-500">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
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
            <div>
              <label className="font-medium text-gray-500">Repeat Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent"
                placeholder="Repeat password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            
            <div className="text-center">
              <button type="submit" className="bg-[#131a4b] px-4 rounded-md text-white font-bold py-2">
                Sign Up
              </button>
            </div>
            <label className='px-2'>
                Already have an account?  
                <Link to='/LogInFormDriver' className='hover:text-amber-500 px-2 text-[#131a4b] font-semibold'>
                Log In
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

export default SignUpFormDriver;
