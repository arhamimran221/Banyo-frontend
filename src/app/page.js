"use client";
import Image from "next/image";
import Layout from "../app/dashboard/layout";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Checkbox, Divider, Select } from "antd";
export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
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
  };

  const handleSubmit = () => {
    console.log("Form submitted");
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
      newErrors.country = "Country is required"; 
    }
    if (!formData.postCode.trim()) {
      newErrors.postCode = "Please enter the postcode";
    }
    if (Object.keys(newErrors).length === 0) {
      router.push("/dashboard");
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // This is a simple example; you can use a library like validator.js for more robust validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const { Option } = Select;

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-[100%] bg-[#F8F7FA]">
        <div className="bg-[#ffff] p-7 rounded-lg md:w-[85%] lg:w-[60%] xl:w-[60%]">
          <h2 className="text-xl font-bold leading-7 text-gray-900 text-center">
            
            BANYO
          </h2>
          <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">
            Request Account
          </h2>
          <p className="mt-1 text-xs leading-6 text-gray-600">
            Enter your information below and we'll have an account set up for
            you.
          </p>

          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs sm:leading-6"
                  onChange={handleInputChange}
                />
                {errors.firstName && (
                  <p className="text-sm text-[red] mt-1">{errors.firstName}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  placeholder="Doe"
                  onChange={handleInputChange} 
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs sm:leading-6"
                />
                {errors.lastName && (
                  <p className="text-sm text-[red] mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="given-name"
                  onChange={handleInputChange} 
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs sm:leading-6"
                />
                {errors.password && (
                  <p className="text-sm text-[red] mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Verify Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="verifyPassword"
                  id="verifyPassword"
                  placeholder="*****"
                  autoComplete="given-name"
                  onChange={handleInputChange} 
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs sm:leading-6"
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
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john.doe@gmail.com"
                  onChange={handleInputChange} 
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-sm text-[red] mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xs	 font-medium leading-6 text-gray-900"
              >
                Mobile
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="07825 567 567"
                  onChange={handleInputChange} 
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs	 sm:leading-6"
                />
                {errors.mobile && (
                  <p className="text-sm text-[red] mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xs	 font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  autoComplete="given-name"
                  onChange={handleInputChange} 
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs	 sm:leading-6"
                />
                {errors.address && (
                  <p className="text-sm text-[red] mt-1">{errors.address}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xs	 font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  autoComplete="given-name"
                  onChange={handleInputChange} 
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs	 sm:leading-6"
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
                  className="block text-xs	 font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <Select
                  value={selectedCountry}
                  onChange={(value) => {
                    handleCountryChange(value); 
                  }}
                  className=" w-[100%] mt-1 h-[36px]"
                >
                  <Option value="United Kingdom">Japan</Option>
                  <Option value="Pakistan">India</Option>
                  <Option value="India">Turkey</Option>
                  <Option value="Canada">Dubai</Option>
                  <Option value="Other">Other Country</Option>
                </Select>
                {errors.country && (
                  <p className="text-sm text-[red] mt-1">{errors.country}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xs	 font-medium leading-6 text-gray-900"
              >
                Post Code
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="postCode"
                  id="postCode"
                  placeholder="Post Code"
                  onChange={handleInputChange} 
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-xs	 sm:leading-6"
                />
                {errors.postCode && (
                  <p className="text-sm text-[red] mt-1">{errors.postCode}</p>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-5"
          >
            
            Submit Account Request 
          </button>
          <button className="text-[#7367F0] gap-5 text-sm w-full mt-4 ">
            &lt; Back to login
          </button>
        </div>
      </div>
    </>
  );
}
