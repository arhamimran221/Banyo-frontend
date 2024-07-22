"use client";
import React, { useState } from "react";
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

const Personalinfo = ({onNextClick,onPreviousClick}) => {
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
      // Create a new object with updated start time for the specified day
      setWorkHours({
        ...workHours,
        [day]: { ...workHours[day], startTime: event.target.value },
      });
    };
  
    const handleEndTimeChange = (event, day) => {
      // Create a new object with updated end time for the specified day
      setWorkHours({
        ...workHours,
        [day]: { ...workHours[day], endTime: event.target.value },
      });
    };
  const nextClick =()=>{
    onNextClick();
  }
   const previousClick =()=>{
      onPreviousClick();
    }
    return (
      <div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Work Hours
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the Standard Work Hours.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-16 justify-between w-full md:mt-4 md:content-center">
          <div className="mt-10 mx-auto w-full md:w-[100%] max-w-screen-lg md:content-center">
              <div className="flex gap-20 gap-y-8">
                <div>
                  <div className="text-[#92909D] mb-[30px]">Sunday</div>
                  <div className="text-[#92909D] mb-[30px]">Monday</div>
                  <div className="text-[#92909D] mb-[30px]">Tuesday</div>
                  <div className="text-[#92909D] mb-[30px]">Wednesday</div>
                  <div className="text-[#92909D] mb-[30px]">Thursday</div>
                  <div className="text-[#92909D] mb-[30px]">Friday</div>
                  <div className="text-[#92909D] mb-[30px]">Saturday</div>
                </div>
                <div className="flex flex-col">
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
                  <label className="relative inline-flex items-center cursor-pointer focus:outline-none mb-[30px]">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer focus:outline-none"
                    />
                    <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer dark:bg-[#ffff] peer-checked:bg-[#867CF2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7367F0]"></div>
                    <span className="ml-3 text-sm font-medium text-[#92909D] dark:text-gray-300">
                      Open
                    </span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer focus:outline-none mb-[30px]">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer focus:outline-none"
                    />
                    <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer dark:bg-[#ffff] peer-checked:bg-[#867CF2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7367F0]"></div>
                    <span className="ml-3 text-sm font-medium text-[#92909D] dark:text-gray-300">
                      Open
                    </span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer focus:outline-none mb-[30px]">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer focus:outline-none"
                    />
                    <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer dark:bg-[#ffff] peer-checked:bg-[#867CF2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7367F0]"></div>
                    <span className="ml-3 text-sm font-medium text-[#92909D] dark:text-gray-300">
                      Open
                    </span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer focus:outline-none mb-[30px]">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer focus:outline-none"
                    />
                    <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer dark:bg-[#ffff] peer-checked:bg-[#867CF2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7367F0]"></div>
                    <span className="ml-3 text-sm font-medium text-[#92909D] dark:text-gray-300">
                      Open
                    </span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer focus:outline-none mb-[30px]">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer focus:outline-none"
                    />
                    <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer dark:bg-[#ffff] peer-checked:bg-[#867CF2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7367F0]"></div>
                    <span className="ml-3 text-sm font-medium text-[#92909D] dark:text-gray-300">
                      Open
                    </span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer focus:outline-none mb-[30px]">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer focus:outline-none"
                    />
                    <div className="w-11 h-6 bg-gray-200 border border-gray-300 rounded-full peer dark:bg-[#ffff] peer-checked:bg-[#867CF2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7367F0]"></div>
                    <span className="ml-3 text-sm font-medium text-[#92909D] dark:text-gray-300">
                      Open
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-10 mx-auto w-full md:w-[100%] max-w-screen-lg">
              <div className="flex items-center mb-3">
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
              <div className="flex items-center mb-3">
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
  
              <div className="flex items-center mb-3">
                <div className="relative">
                  <input
                    type="time"
                    value={workHours.wednesday.startTime}
                    onChange={(e) => handleStartTimeChange(e, "wednesday")}
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
              <div className="flex items-center mb-3">
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
              <div className="flex items-center mb-3">
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
              <div className="flex items-center mb-3">
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
            <div className="mt-10 mx-auto w-full md:w-[100%] lg:max-w-screen">
              <div className="flex border border-[#B0A9F7] cursor-pointer bg-[#F4F3FE] items-center pl-[1.5rem] pr-[1.5rem] text-[#B0A9F7] text-sm rounded-md p-1.5">
                <CopyOutlined className="mr-2 text-[#B0A9F7]" />
                Copy time to all days
              </div>
              <div className="mt-6 border border-[#B0A9F7] cursor-pointer bg-[#F4F3FE] flex items-center pl-[1.5rem] pr-[1.5rem] text-[#B0A9F7] text-sm rounded-md p-1.5">
                <CopyOutlined className="mr-2 text-[#B0A9F7]" />
                Copy time to all days
              </div>
              <div className="mt-6 border border-[#B0A9F7] cursor-pointer bg-[#F4F3FE] flex items-center pl-[1.5rem] pr-[1.5rem] text-[#B0A9F7] text-sm rounded-md p-1.5">
                <CopyOutlined className="mr-2 text-[#B0A9F7]" />
                Copy time to all days
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
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ml-auto"
            onClick={nextClick}
          >
            Next <ArrowRightOutlined className="pt-[3px] pl-2" />
          </button>
      </div>
      </div>
    );
  };
  export default Personalinfo