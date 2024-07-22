"use client ";
import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./invoice.module.css";

import { Checkbox, Divider, Select } from "antd";

const Lock = ({onNextClick,onPreviousClick}) => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [checkedList, setCheckedList] = useState([]);
    const toggleCheckbox1 = () => {
      setIsChecked1(!isChecked1);
    };
    const toggleCheckbox2 = () => {
      setIsChecked2(!isChecked2);
    };
  
    const toggleCheckbox3 = () => {
      setIsChecked3(!isChecked3);
    };
    const toggleCheckbox4 = () => {
      setIsChecked4(!isChecked4);
    };
    const toggleCheckbox5 = () => {
      setIsChecked5(!isChecked5);
    };
    const toggleCheckbox6 = () => {
      setIsChecked6(!isChecked6);
    };
    const onChange = (list) => {
      setCheckedList(list);
    };
    const onCheckAllChange = (e) => {
      setCheckedList(
        e.target.checked ? plainOptions.map((option) => option.label) : []
      );
    };
    const plainOptions = [
      {
        label: "Option 1",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 2",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 3",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 4",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 5",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 6",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 7",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 8",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
      {
        label: "Option 9",
        icon: <ShopOutlined className="text-[30px] text-[#6366F1]" />,
      },
  
      // Add more options as needed with their respective icons
    ];
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate =
      checkedList.length > 0 && checkedList.length < plainOptions.length;
    const nextClick =()=>{
      onNextClick();
    }
    const previousClick =()=>{
      onPreviousClick();
    }
    return (
      <>
        <div className="flex gap-8 border-b border-gray-900/10 mx-1 flex-col md:flex-row">
          <div className="lg:w-[65%] md:w-[100%]">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Roles
            </h2>
            <div className="container pr-2 my-4 mx-auto">
              <div className="divide-y">
                <div className="flex items-start space-x-3 py-6 border-dashed">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="hidden"
                    checked={isChecked1}
                    onChange={toggleCheckbox1}
                  />
                  <label
                    htmlFor="checkbox1"
                    className={`border-gray-300 rounded-full h-5 w-5 border-2 flex items-center justify-center cursor-pointer ${
                      isChecked1 ? " border-indigo-600	 border-4" : ""
                    }`}
                  ></label>
  
                  <div className="flex flex-col">
                    <h1 className="text-gray-700 font-medium leading-none">
                      Element definition 1
                    </h1>
                    <p className="text-xs text-gray-500 mt-2 leading-4">
                      A plugin that provides a basic reset for form styles that
                      makes form elements easy to override with utilities.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start space-x-3 py-6 border-dashed">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    className="hidden"
                    checked={isChecked2}
                    onChange={toggleCheckbox2}
                  />
                  <label
                    htmlFor="checkbox2"
                    className={`border-gray-300 rounded-full h-5 w-5 border-2 flex items-center justify-center cursor-pointer ${
                      isChecked2 ? "border-indigo-600	 border-4" : ""
                    }`}
                  ></label>
  
                  <div className="flex flex-col">
                    <h1 className="text-gray-700 font-medium leading-none">
                      Element Definition 2
                    </h1>
                    <p className="text-xs text-gray-500 mt-2 leading-4">
                      A plugin that provides a basic reset for form styles that
                      makes form elements easy to override with utilities.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start space-x-3 py-6 border-dashed">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    className="hidden"
                    checked={isChecked3}
                    onChange={toggleCheckbox3}
                  />
                  <label
                    htmlFor="checkbox3"
                    className={`border-gray-300 rounded-full h-5 w-5 border-2 flex items-center justify-center cursor-pointer ${
                      isChecked3 ? "border-indigo-600	 border-4 " : ""
                    }`}
                  ></label>
  
                  <div className="flex flex-col">
                    <h1 className="text-gray-700 font-medium leading-none">
                      Element Definition 3
                    </h1>
                    <p className="text-xs text-gray-500 mt-2 leading-4">
                      A plugin that provides a basic reset for form styles that
                      makes form elements easy to override with utilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 py-6 border-dashed">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    className="hidden"
                    checked={isChecked4}
                    onChange={toggleCheckbox4}
                  />
                  <label
                    htmlFor="checkbox4"
                    className={`border-gray-300 rounded-full h-5 w-5 border-2 flex items-center justify-center cursor-pointer ${
                      isChecked4 ? "border-indigo-600	 border-4 " : ""
                    }`}
                  ></label>
  
                  <div className="flex flex-col">
                    <h1 className="text-gray-700 font-medium leading-none">
                      Element Definition 4
                    </h1>
                    <p className="text-xs text-gray-500 mt-2 leading-4">
                      A plugin that provides a basic reset for form styles that
                      makes form elements easy to override with utilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 py-6 border-dashed">
                  <input
                    type="checkbox"
                    id="checkbox5"
                    className="hidden"
                    checked={isChecked5}
                    onChange={toggleCheckbox5}
                  />
                  <label
                    htmlFor="checkbox5"
                    className={`border-gray-300 rounded-full h-5 w-5 border-2 flex items-center justify-center cursor-pointer ${
                      isChecked5 ? "border-indigo-600	 border-4 " : ""
                    }`}
                  ></label>
  
                  <div className="flex flex-col">
                    <h1 className="text-gray-700 font-medium leading-none">
                      Element Definition 5
                    </h1>
                    <p className="text-xs text-gray-500 mt-2 leading-4">
                      A plugin that provides a basic reset for form styles that
                      makes form elements easy to override with utilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 py-6 border-dashed">
                  <input
                    type="checkbox"
                    id="checkbox6"
                    className="hidden"
                    checked={isChecked6}
                    onChange={toggleCheckbox6}
                  />
                  <label
                    htmlFor="checkbox6"
                    className={`border-gray-300 rounded-full h-5 w-5 border-2 flex items-center justify-center cursor-pointer ${
                      isChecked6 ? "border-indigo-600	 border-4 " : ""
                    }`}
                  ></label>
  
                  <div className="flex flex-col">
                    <h1 className="text-gray-700 font-medium leading-none">
                      Element Definition 6
                    </h1>
                    <p className="text-xs text-gray-500 mt-2 leading-4">
                      A plugin that provides a basic reset for form styles that
                      makes form elements easy to override with utilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[35%] sm:w-auto md:w-full md:[justify-center]">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-10">
              Stores
            </h2>
  
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
              className="m-auto w-[70%] justify-center gap-4 flex border border-[#6366F1] cursor-pointer  items-center pl-[1.5rem] pr-[1.5rem] text-[#6366F1] text-sm rounded-md p-1.5"
            >
              Select all Stores
            </Checkbox>
            <Divider />
            <div className="flex-col gap-y-2 ">
              <Checkbox.Group
                options={plainOptions.map((option) => ({
                  label: (
                    <span className="flex flex-col items-center gap-y-3 gap-44 mb-3">
                      {option.icon}
                      {option.label}
                    </span>
                  ),
                  value: option.label,
                }))}
                value={checkedList}
                onChange={onChange}
              />
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
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ml-auto
            "onClick={nextClick}
          >
            Next <ArrowRightOutlined className="pt-[3px] pl-2" />
          </button>
      </div>
      </>
    );
  };
  export default Lock