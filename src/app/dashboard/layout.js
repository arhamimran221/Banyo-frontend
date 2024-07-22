"use client";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";
import img from "./download.jpeg";
import Image from "next/image";
import {
  AppstoreAddOutlined,
  CodeSandboxOutlined,
  UsergroupAddOutlined,
  FileTextOutlined,
  FileWordOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  DollarOutlined,
  UserOutlined,
  TagOutlined,
  EditOutlined,
  AppstoreOutlined,
  CrownOutlined,
  FileProtectOutlined,
  ShopOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }) {
  const currentRoute = usePathname();
  const activeStyle = " text-white bg-indigo-500 rounded-lg	";
  const nonActiveStyle = " text-white";
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarWidth = isSidebarCollapsed ? 70 : 210;

  const sidebarStyles = {
    width: `${sidebarWidth}px`,
  };

  const contentStyles = {
    marginLeft: `${sidebarWidth}px`,
  };

  return (
    <main
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      className="main-container"
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <div
          style={sidebarStyles}
          className={`bg-gray-900 ${
            isSidebarCollapsed ? "w-14" : "sm:w-50"
          } h-[100%] pt-3 transition-all side-bsr fixed top-0 left-0`}
        >
          <div className="pt-1 text-white px-4 flex">
            {isSidebarCollapsed ? "" : <>COMPANY LOGO</>}
            <button
              onClick={toggleSidebar}
              className="text-white bg-indigo-500 rounded-full w-6 h-6 absolute top-3 right-3 text-center mr-3"
            >
              {isSidebarCollapsed ? <span>+</span> : <span>-</span>}
            </button>
          </div>
          <ul className="pt-5 flex flex-col px-4 text-white gap-1 text-sm	">
            <div className="text-gray-500 text-xs	mt- flex align-middle">
              {isSidebarCollapsed ? "" : <>PAGES</>}
            </div>
            <Link
              href="/dashboard/products"
              className={
                currentRoute === "/dashboard/products"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  text-[#d0d4f1ad] transition duration-300 ease-in-out rounded-lg ...">
                <li className="flex items-center ">
                  {isSidebarCollapsed ? (
                    <CodeSandboxOutlined className="px-2 py-2 text-xl " />
                  ) : (
                    <>
                      <CodeSandboxOutlined className="px-2 py-2" /> Products
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/customers"
              className={
                currentRoute === "/dashboard/customers"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed text-[#d0d4f1ad] transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <UsergroupAddOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <UsergroupAddOutlined className="px-2 py-2" />
                      Customers
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <div className="text-gray-500 text-xs mt- flex align-middle">
              {isSidebarCollapsed ? "" : <>SALES</>}
            </div>
            <Link
              href="/dashboard/invoices"
              className={
                currentRoute === "/dashboard/invoices"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed   text-[#d0d4f1ad] transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <FileTextOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <FileTextOutlined className="px-2 py-2" /> Invoices
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/quotes"
              className={
                currentRoute === "/dashboard/quotes"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed text-[#d0d4f1ad] transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <FileWordOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <FileWordOutlined className="px-2 py-2" /> Quotes
                    </>
                  )}
                </li>
              </div>
            </Link>
            <Link
              href="/dashboard/orders"
              className={
                currentRoute === "/dashboard/orders"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed text-[#d0d4f1ad] transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <ShoppingCartOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <ShoppingCartOutlined className="px-2 py-2" />
                      Orders
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/notes"
              className={
                currentRoute === "/dashboard/notes"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed text-[#d0d4f1ad] transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <BookOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <BookOutlined className="px-2 py-2" /> Credit Notes
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/payments"
              className={
                currentRoute === "/dashboard/payments"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed text-[#d0d4f1ad] transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <DollarOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <DollarOutlined className="px-2 py-2" />
                      A/C Payments
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <div className="text-gray-500 text-xs mt- flex align-middle">
              {isSidebarCollapsed ? "" : <>MANAGEMENTS</>}
            </div>
            
            <Link
              href="/dashboard/edit-requests"
              className={
                currentRoute === "/dashboard/edit-requests"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed text-[#d0d4f1ad] transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <EditOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <EditOutlined className="px-2 py-2" />
                      Edit Requests
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <div className="text-gray-500 text-xs mt- flex align-middle">
              {isSidebarCollapsed ? "" : <>PRODUCT MANAGEMENTS</>}
            </div>
            <Link
              href="/dashboard/category"
              className={
                currentRoute === "/dashboard/category"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center  hover:bg-[hsl(0,0%,98.4%,0.2)] text-[#d0d4f1ad] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <AppstoreOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <AppstoreOutlined className="px-2 py-2" />
                      Category
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/brands"
              className={
                currentRoute === "/dashboard/brands"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center text-[#d0d4f1ad] hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <CrownOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <CrownOutlined className="px-2 py-2" /> Brands
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/tags"
              className={
                currentRoute === "/dashboard/tags"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center text-[#d0d4f1ad] hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <TagOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <TagOutlined className="px-2 py-2" />
                      Tags
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <div className="text-gray-500 text-xs mt- flex align-middle">
              {isSidebarCollapsed ? "" : <>ACCOUNTS</>}
            </div>
            <Link
              href="/dashboard/reports"
              className={
                currentRoute === "/dashboard/reports"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center text-[#d0d4f1ad] hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <FileProtectOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <FileProtectOutlined className="px-2 py-2" />
                      Reports
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/suppliers"
              className={
                currentRoute === "/dashboard/suppliers"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center text-[#d0d4f1ad] hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <UserOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <UserOutlined className="px-2 py-2" />
                      Suppliers
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <div className="text-gray-500 mt- text-xs flex align-middle">
              {isSidebarCollapsed ? "" : <>ADMIN</>}
            </div>
            <Link
              href="/dashboard/suppliers"
              className={
                currentRoute === "/dashboard/suppliers"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center text-[#d0d4f1ad] hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <ShopOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <ShopOutlined className="px-2 py-2" />
                      Stores
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/user"
              className={
                currentRoute === "/dashboard/user"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center text-[#d0d4f1ad] hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <UserOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <UserOutlined className="px-2 py-2" />
                      User Accounts
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
            <Link
              href="/dashboard/profile"
              className={
                currentRoute === "/dashboard/profile"
                  ? activeStyle
                  : nonActiveStyle
              }
            >
              <div className="flex items-center text-[#d0d4f1ad] hover:bg-[hsl(0,0%,98.4%,0.2)] bg-fixed  transition duration-300 ease-in-out	rounded-lg ...">
                <li className="flex items-center">
                  {isSidebarCollapsed ? (
                    <SettingOutlined className="px-2 py-2 text-xl" />
                  ) : (
                    <>
                      <SettingOutlined className="px-2 py-2" />  Roles & Permissions
                    </>
                  )}
                </li>{" "}
              </div>
            </Link>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          {/* Page content */}
          <div style={contentStyles}>
            <nav
              style={{
                transition: "margin-left 0.3s",
                marginLeft: `${sidebarWidth}px`,
              }}
              style={{ textAlign: "right" }}
              className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] m-5 bg-[#ffff]	"
            >
              <ul className="flex items-center gap-6 ">
                <div className="max-w-md mr-auto">
                  <div className="relative flex items-center w-full h-12 rounded-lg  overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                      type="text"
                      id="search"
                      placeholder="Search something.."
                    />
                  </div>
                </div>
                <AppstoreAddOutlined className="text-2xl text-violet-700 cursor-pointer" />
                <div className="pr-5 py-2">
                  <Image
                    src={img}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className="rounded-full "
                  />
                </div>
              </ul>
            </nav>
            <div className="m-5 mt-8 h-auto  rounded-s-sm  bg-[#ffff]	"
             style={{
              overflowY: "auto", 
              maxHeight: "78vh", 
              scrollBehavior: "smooth",
            }}>
              {children}
            </div>
            <div className="text-right	mr-4 text-sm  text-indigo-500		">
              @2023 POS version 1.0
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
