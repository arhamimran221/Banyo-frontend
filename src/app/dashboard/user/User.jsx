"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  UserOutlined,
  ClockCircleOutlined,
  LockOutlined,
  CheckCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CopyOutlined,
  CheckOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./invoice.module.css";

import { Checkbox, Divider, Select } from "antd";

const User = ({onNextClick}) => {
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");

  const { Option } = Select;

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    verifyPassword: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    country: "Pakistan",
    postCode: "",
  });

  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: undefined,
      });
  
      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors({
            ...errors,
            [name]: 'Invalid email format',
          });
        }
      }
    }
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.verifyPassword) {
      newErrors.verifyPassword = "Passwords do not match";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "Please enter the city";
    }
    if (!selectedCountry) {
      newErrors.country = "Country is required"; // Set the error message for the country
    }
    if (!formData.postCode.trim()) {
      newErrors.postCode = "Please enter the postcode";
    }
    
    if (Object.keys(newErrors).length === 0) {
      console.log("No validation errors, calling onNextClick");
      onNextClick();
    } else {
      console.log("Validation errors found, not calling onNextClick");
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            User Details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the User Details.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.firstName && (
                  <p className="text-sm text-[red] mt-1">{errors.firstName}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  placeholder="Doe"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.lastName && (
                  <p className="text-sm text-[red] mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="given-name"
                  onChange={handleInputChange} // Corrected onChange handler
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-sm text-[red] mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Verify Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="verifyPassword"
                  id="verifyPassword"
                  placeholder="*****"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.verifyPassword && (
                  <p className="text-sm text-[red] mt-1">
                    {errors.verifyPassword}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john.doe@gmail.com"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.email && (
                  <p className="text-sm text-[red] mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="07825 567 567"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.mobile && (
                  <p className="text-sm text-[red] mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} 
                />
                {errors.address && (
                  <p className="text-sm text-[red] mt-1">{errors.address}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.city && (
                  <p className="text-sm text-[red] mt-1">{errors.city}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="relative inline-block text-left w-[100%]">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <Select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className=" w-[100%] mt-2 h-[36px]"
                >
                  <Option value="United Kingdom">India</Option>
                  <Option value="Pakistan">Canada</Option>
                  <Option value="India">America</Option>
                  <Option value="Canada">Paris</Option>
                  <Option value="Other">Other Country</Option>
                </Select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Post Code
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="postCode"
                  id="postCode"
                  placeholder="Post Code"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                />
                {errors.postCode && (
                  <p className="text-sm text-[red] mt-1">{errors.postCode}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-4  w-full text-right next-btn  mt-5">
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ml-auto" onClick={handleSubmit}>
          Next <ArrowRightOutlined className="pt-[3px] pl-2" />
        </button>
      </div>
    </>
  );
};
export default User;
