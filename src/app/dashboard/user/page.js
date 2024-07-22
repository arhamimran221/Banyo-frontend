"use client";
import React, { useState } from "react";
import {
  UserOutlined,
  ClockCircleOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./invoice.module.css";

import User from "./User";
import Personalinfo from "./Personalinfo";
import Lock from "./Lock";
import Review from "./Review";

const Invoice = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleNextClick = () => {
    // Logic to navigate to the next tab
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePreviousClick = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };
  return (
    <div className="flex flex-row">
      <div className="flex-grow">
        <div className="p-4 border-b-[1px]  ">
          <div className="flex justify-center text-center gap-8 py-4 cursor-pointer items-end ">
            <div
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              // onClick={() => handleTabClick(1)}
            >
              <UserOutlined className="text-3xl" />
              <div>Account Details</div>
            </div>
                       
              <div
                className={`tab`}
                // onClick={() => handleTabClick(activeTab - 1)}
              >
                <div>&gt;</div>
              </div>
            

            <div
              className={`tab ${activeTab === 2 ? "active" : ""}`}
              // onClick={() => handleTabClick(2)}
            >
              <ClockCircleOutlined className="text-3xl" />
              <div>Personal Info</div>
            </div>
              
              <div
                className={`tab`}
                // onClick={() => handleTabClick(activeTab - 1)}
              >
                <div>&gt;</div>
              </div>
          
            <div
              className={`tab ${activeTab === 3 ? "active" : ""}`}
              // onClick={() => handleTabClick(3)}
            >
              <LockOutlined className="text-3xl" />
              <div>Roles & Stores</div>
            </div>
          
              <div
                className={`tab`}
                // onClick={() => handleTabClick(activeTab - 1)}
              >
                <div>&gt;</div>
              </div>
            <div
              className={`tab ${activeTab === 4 ? "active" : ""}`}
              // onClick={() => handleTabClick(4)}
            >
              <CheckCircleOutlined className="text-3xl" />
              <div>Review & Submit</div>
            </div>
          </div>
          <div className="tab-content">
            {activeTab === 1 && <User onNextClick={handleNextClick}/>}
            {activeTab === 2 && <Personalinfo onNextClick={handleNextClick} onPreviousClick={handlePreviousClick}/>}
            {activeTab === 3 && <Lock onNextClick={handleNextClick} onPreviousClick={handlePreviousClick}/>}
            {activeTab === 4 && <Review onPreviousClick={handlePreviousClick}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;







// const handlePreviousClick = () => {
//   setCurrentIndex(
//     (prevIndex) => (prevIndex - 1 + images.length) % images.length
//   );
// };

  // const handleNextClick = () => {
  //   const currentImage = images[currentIndex];
  //   if (currentImage.validate) {
  //     const validationError = currentImage.validate();
  //     if (validationError) {
  //       setValidationErrors({ [currentIndex]: validationError });
  //       return;
  //     }
  //   }

  //   if (currentIndex === images.length - 1) {
  //     console.log("Submit button clicked"); // Handle the Submit action here
  //   } else {
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };
  // const images = [
  //   {
  //     icon: <UserOutlined className="text-3xl" />,
  //     lable: "Account Details",
  //     slider: <User />,
  //     // validate: validateUser,
  //   },
  //   {
  //     icon: <ClockCircleOutlined className="text-3xl" />,
  //     lable: "Personal Info",
  //     slider: <Personalinfo />,
  //   },
  //   {
  //     icon: <LockOutlined className="text-3xl" />,
  //     lable: "Roles & Stores",
  //     slider: <Lock />,
  //   },
  //   {
  //     icon: <CheckCircleOutlined className="text-3xl" />,
  //     lable: "Review & Submit",
  //     slider: <Review />,
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [validationErrors, setValidationErrors] = useState({});

  // const handleButtonClick = (index) => {
  //   setCurrentIndex(index);
  // };
  // const userRef = useRef(null);

  // const handleNextClick = () => {
  //   if (currentIndex === images.length - 1) {
  //     console.log("Submit button clicked");
  //   } else {
  //     if (currentIndex === 0) {
  //       // If the current step is the "User" step, validate the User component.
  //       const userValidationError = userRef.current.validateUser();
  //       if (userValidationError) {
  //         setValidationErrors({ [currentIndex]: userValidationError });
  //         return;
  //       }
  //     }
  //     // Handle navigation to the next step here.
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

        {/* {images.map((item, index) => (
          <div key={index} className="icons-slider text-center">
            <button
              className={`p-2 rounded-lg ${
                currentIndex === index
                  ? "text-indigo-500"
                  : "bg-white text-gray-800"
              }  focus:outline-none flex items-center justify-between gap-8`}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <span className="mt-2">{item.lable}</span>
              </div>
              {index < images.length - 1 && (
                <span className="text-gray-800 ">&gt;</span>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full p-4">
        {images[currentIndex].slider}
        {validationErrors[currentIndex] && (
          <div className="text-red-500 text-center mt-2">
            {validationErrors[currentIndex]}
          </div>
        )} */}
      {/* <div className="flex justify-between px-4 pb-4 w-full text-right next-btn">
        {currentIndex > 0 && (
          <button
            onClick={handlePreviousClick}
            type="button"
            className="rounded-md bg-[#F6F6F7] px-3 py-2 text-sm font-semibold text-[#CDCFD1] shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-left flex align-center"
          >
            <ArrowLeftOutlined className="pt-[3px] pr-2" /> Previous
          </button>
        )}
        {currentIndex === images.length - 1 ? (
          <button
            onClick={() => console.log("Submit button clicked")} // Handle the Submit action here
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNextClick}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ml-auto"
          >
            Next <ArrowRightOutlined className="pt-[3px] pl-2" />
          </button>
        )}
      </div> */}