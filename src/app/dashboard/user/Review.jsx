"use client";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

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
import { useRouter } from 'next/navigation';

const Review = ({onPreviousClick}) => {
  const router = useRouter(); 
    const [selectedCity, setSelectedCity] = useState("Lahore");
    const [selectedCountry, setSelectedCountry] = useState("Pakistan");
    const { Option } = Select;
    const handleCityChange = (value) => {
      setSelectedCity(value);
    };
  
    const handleCountryChange = (value) => {
      setSelectedCountry(value);
    };
    const [workHours, setWorkHours] = useState({
      sunday: { startTime: "12:00", endTime: "18:00" },
      monday: { startTime: "12:00", endTime: "18:00" },
      tuesday: { startTime: "12:00", endTime: "18:00" },
      wednesday: { startTime: "12:00", endTime: "18:00" },
      thursday: { startTime: "12:00", endTime: "18:00" },
      friday: { startTime: "12:00", endTime: "18:00" },
      saturday: { startTime: "12:00", endTime: "18:00" },
    });
    const handleStartTimeChange = (event, day) => {
      setWorkHours({
        ...workHours,
        [day]: { ...workHours[day], startTime: event.target.value },
      });
    };
  
    const handleEndTimeChange = (event, day) => {
      setWorkHours({
        ...workHours,
        [day]: { ...workHours[day], endTime: event.target.value },
      });
    };
    const previousClick =()=>{
      onPreviousClick();
    }

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
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
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Invalid email format";
      }
  
      if (!formData.mobile.trim()) {
        newErrors.mobile = "Phone Number is required";
      }
      if (!formData.address.trim()) {
        newErrors.address = "Please Give your Address ";
      }
      if (!formData.postCode.trim()) {
        newErrors.postCode = "Please enter the postcode";
      }
      
      if (Object.keys(newErrors).length === 0) {
        console.log("No validation errors, calling onNextClick");
        Swal.fire({
          title: 'Form Submitted!',
          text: 'Your form has been Submitted!',
          icon: 'success',
          showCancelButton: false, 
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          }).then((result) => {
          if (result.isConfirmed) {
            router.push('/dashboard');
          }
        });
      }  
       else {
        console.log("Validation errors found, not calling onNextClick");
        setErrors(newErrors);
        Swal.fire(
          'Empty fields Found!',
          'Please fill the required fields!',
          'error'
        )
      }
    };
  
    const isValidEmail = (email) => {
     
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    return (
      <>
        <div className="border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            User Details
          </h2>
          <div className="mt-5 pb-6 mx-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 border-b border-gray-900/10">
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
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
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
                Primary Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="0894 3456 4567"
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
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@gmail.com"
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
                Address Line
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="address"
                  id="address"
                  placeholder="12 Sample Street"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1] sm:text-sm sm:leading-6"
                  onChange={handleInputChange} // Corrected onChange handler
                  />
                  {errors.address && (
                    <p className="text-sm text-[red] mt-1">{errors.address}</p>
                  )}
              </div>
            </div>
  
            <div className="sm:col-span-3">
              <div className="relative inline-block text-left w-[100%]">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <Select
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="w-[100%] mt-2 h-[36px]"
                >
                  <Option value="United Kingdom">Lahore</Option>
                  <Option value="Pakistan">karachi</Option>
                  <Option value="India">Peshawer</Option>
                  <Option value="Canada">Quetta</Option>
                  <Option value="Other">Other City</Option>
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
                  className="w-[100%] mt-2 h-[36px]"
                >
                  <Option value="United Kingdom">United Kingdom</Option>
                  <Option value="Pakistan">Pakistan</Option>
                  <Option value="India">India</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="Other">Other Country</Option>
                </Select>
              </div>
            </div>
          </div>
            <div className="mt-5 flex gap-16 profile-content">
              <div className="flex gap-20 gap-y-8 ">
                <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900 mt-8 mb-10">
                  Work Hours
                </h2>
                  <div className="text-[#92909D] mb-[25px] flex items-center gap-8 w-[100%]">
                    <div className="w-[50%]">Monday</div>
                    <div>
                      <div className="flex items-center w-[50%]">
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.monday.startTime}
                            onChange={(e) => handleStartTimeChange(e, "monday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.monday.endTime}
                            onChange={(e) => handleEndTimeChange(e, "monday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#92909D] mb-[25px] flex items-center gap-8 w-[100%]">
                    <div className="w-[50%]"> Tuesday</div>
                    <div>
                      <div className="flex items-center w-[50%]">
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.tuesday.startTime}
                            onChange={(e) => handleStartTimeChange(e, "tuesday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.tuesday.endTime}
                            onChange={(e) => handleEndTimeChange(e, "tuesday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#92909D] mb-[25px] flex items-center gap-8 w-[100%]">
                    <div className="w-[50%]">Wednesday</div>
                    <div>
                      <div className="flex items-center w-[50%]">
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.wednesday.startTime}
                            onChange={(e) =>
                              handleStartTimeChange(e, "wednesday")
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.wednesday.endTime}
                            onChange={(e) => handleEndTimeChange(e, "wednesday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#92909D] mb-[25px] flex items-center gap-8 w-[100%]">
                    <div className="w-[50%]">Thursday</div>
                    <div>
                      <div className="flex items-center w-[50%]">
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.thursday.startTime}
                            onChange={(e) => handleStartTimeChange(e, "thursday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.thursday.endTime}
                            onChange={(e) => handleEndTimeChange(e, "thursday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#92909D] mb-[25px] flex items-center gap-8 w-[100%]">
                    <div className="w-[50%]">Friday</div>
                    <div>
                      <div className="flex items-center w-[50%]">
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.friday.startTime}
                            onChange={(e) => handleStartTimeChange(e, "friday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.friday.endTime}
                            onChange={(e) => handleEndTimeChange(e, "friday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#92909D] mb-[25px] flex items-center gap-8 w-[100%]">
                    <div className="w-[50%]">Saturday</div>
                    <div>
                      <div className="flex items-center w-[50%] ">
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.saturday.startTime}
                            onChange={(e) => handleStartTimeChange(e, "saturday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                          <input
                            type="time"
                            value={workHours.saturday.endTime}
                            onChange={(e) => handleEndTimeChange(e, "saturday")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-[1.5rem] p-2.5  cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#92909D] mb-[25px] flex mt-9 gap-8 w-[100%]">
                    <div className="w-[20%]">Sunday</div>
                    <div>
                      <div className="flex items-center  w-[50%]">
                        <label className="relative inline-flex items-center cursor-pointer focus:outline-none mb-[30px]">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer focus:outline-none"
                          />
                          <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer dark:bg-[#ffff] peer-checked:bg-[#867CF2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7367F0]"></div>
                          <span className="ml-3 text-sm font-medium text-[#92909D] dark:text-gray-300">
                            Closed
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
              <h2 className="text-base font-semibold leading-7 text-gray-900 mt-8 mb-10">
                  Roles & Stores
                </h2>
                <div className="flex mb-6">
                  <div className="w-[150px]">Role</div>
                  <div className="  bg-[#F4F3FE]   rounded-md w-[auto] px-2 text-[#7367F0]" >Administrator</div>
                </div>
                <div className="flex ">
                  <div className="w-[150px]">Stores</div>
                  <div className="flex gap-2">
                    <div className="border border-[#B0A9F7]  bg-[#F4F3FE] px-4 py-4 border-dashed rounded-md roles-icon">
                      <div >
                        <ShopOutlined className="text-[#7367F0] text-xl"/>
                      </div>
                      <div>
                        Nexus Trade
                        </div>
                    </div>
                    <div className="border border-[#B0A9F7]  bg-[#F4F3FE] px-4 py-4 border-dashed rounded-md roles-icon">
                      <div >
                        <ShopOutlined className="text-[#7367F0] text-xl"/>
                      </div>
                      <div>Nexus Trade</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="flex justify-between px-4  w-full text-right next-btn mt-5">
          <button
            type="button"
            onClick={previousClick}
            className="rounded-md bg-[#F6F6F7] px-3 py-2 text-sm font-semibold text-[#CDCFD1] shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-left flex align-center"
          >
            <ArrowLeftOutlined className="pt-[3px] pr-2" /> Previous
          </button>
       
          <button
            onClick={handleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ml-auto"
          >
            Submit <ArrowRightOutlined className="pt-[3px] pl-2" />
          </button>
      </div>
      </>
    );
  };
export default Review