"use client";
import React, { useState } from 'react';
import { Table, Input, Select,Tag,Space } from 'antd';
import {
 PlusOutlined,
 CodeSandBoxOutlined,
 CheckCircleOutlined,
 InfoCircleOutlined ,
 TransactionOutlined,
 NodeCollapseOutlined,
 MailOutlined,
 DeleteOutlined,
 EditOutlined,
 UserOutlined,
 ClockCircleOutlined,
 LockOutlined,
} from "@ant-design/icons";
import View from "./view";
import Collection from "./Collections";
import Return from "./Return";
import AddInvoice from './AddInvoice';
const { Search } = Input;
const { Option } = Select;

const data = [
  {
    key: '1',
    name: 'John Brown',
    icons: <CheckCircleOutlined className="text-lg text-[#48cf83] bg-[#ddf6e9] p-1 rounded-full	"/>,
    chinese: 98,
    math: 60,
    english: 70,
    tags: ['Paid'],
  },
  {
    key: '2',
    name: 'Jim Green',
    icons: <InfoCircleOutlined className="text-lg text-[#ed6c6c] bg-[#fbe4e5] p-1 rounded-full"/>,
    chinese: 98,
    math: 66,
    english: 89,
    tags: ['Pending'],

  },
  {
    key: '3',
    name: 'Joe Black',
    icons: <TransactionOutlined className="text-lg text-[#ffb36c] bg-[#ffe0c3] p-1 rounded-full"/>,
    chinese: 98,
    math: 90,
    english: 70,
    tags: ['Half Paid'],

  },
  {
    key: '4',
    name: 'Jim Red',
    icons: <NodeCollapseOutlined  className="text-lg text-[#abadaf] bg-[#eaeaeb] p-1 rounded-full"/>,
    chinese: 88,
    math: 99,
    english: 89,
    tags: ['Returned'],

  },
];

const MainTable = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [tagFilter, setTagFilter] = useState('all');
  const [tagChinese, setTagChinese] = useState('all');
  const [handleTabRender,setHandleTabRender]=useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const [addInvoice,setAddInvoice] = useState(true);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a className="text-[#4f46e5]">{text}</a>,
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: <CodeSandBoxOutlined className="text-lg"/>,
      dataIndex: 'icons',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            let bgColor = tag.length
            let bgborder = tag.length
  
            if (tag === 'Pending') {
              color = 'volcano';
            }
            if (tag === 'Returned') {
              color = '#acaeb0';
              
            }
            if (tag === 'Half Paid') {
              color = '#ffb671';
              bgColor = '#ffe0c3';
              
            }
            return (
              <Tag color={color} style={{ backgroundColor: bgColor ,color:color ,border:bgborder}} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a className='text-[#4f46e5]'><MailOutlined /></a>
          <a className='text-[#4f46e5]' ><EditOutlined  onClick={() => handleRenderingTab(record)} /> </a>
          <a className='text-[#4f46e5]'><DeleteOutlined /></a>
        </Space>
      ),
    },
  ];
  
  
  
  const handleSearch = (value) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleFilter = (value) => {
    setTagFilter(value);
    if (value === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.tags.includes(value));
      const filteredChinese = data.filter((item) => item.chinese >= parseInt(value));
      setFilteredData(filtered);
    }
  };


  const paginationConfig = {
    total: filteredData.length,
    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
    defaultPageSize: 5,
    showQuickJumper: true,
  };
 const handleRenderingTab =(record)=> {
   setHandleTabRender(!handleTabRender);
 }
 const handleTabClick = (tabNumber) => {
  setActiveTab(tabNumber);
};
const handleInvoiceRender =()=>{
  setAddInvoice(!addInvoice);
}
{addInvoice && (
  <div>
    hello
  </div>
)}
  return (
   <>

    {addInvoice && (<div>hi</div>)?(<div>
    {handleTabRender &&   (<div>hello</div>) ? (<div> <div className="p-4 gap-8 flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Select
            style={{ width: 150 }}
            defaultValue="all"
            onChange={handleFilter}
          >
            <Option value="all">All Chinese Scores</Option>
            <Option value="90">Chinese Score  90</Option>
            <Option value="80">Chinese Score80</Option>
          </Select>
          <button className="font-normal rounded rounded-xl bg-indigo-600 gap-3 px-3 py-2 text-white text-sm"
          onClick={handleInvoiceRender}
          >
            <PlusOutlined /> Create Invoice
          </button>
        </div>
        <div className="flex gap-5">
          <Search
            placeholder="Search Invoice"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
           <Select
            style={{ width: 150 }}
            value={tagFilter}
            onChange={handleFilter}
          >
            <Option value="all">All Tags</Option>
            <Option value="Paid">Paid</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Half Paid">Half Paid</Option>
            <Option value="Returned">Returned</Option>
          </Select>
          <Select
            style={{ width: 150 }}
            defaultValue="all"
            value={tagChinese}
            onChange={handleFilter}
          >
            <Option value="all">All Chinese Scores</Option>
            <Option value="90">Chinese Score  90</Option>
            <Option value="80">Chinese Score80</Option>
          </Select>
        </div>
        </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={paginationConfig}
        onChange={onChange}
      /> </div>):(
        <div className="flex flex-col gap-8 bg-[#f8f7fa]"> 
          <div className="flex justify-center text-center gap-8 py-4 cursor-pointer items-center bg-[#fff] h-auto  rounded-s-sm  bg-[#ffff]
             shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              <div>Invoice Details</div>
            </div>
                       
              <div
                className={`tab`}
              >
              </div>
            

            <div
              className={`tab ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              <div>Delivery/Collection</div>
            </div>
              
              <div
                className={`tab`}
              >
              </div>
          
            <div
              className={`tab ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              <div>Returns</div>
            </div>
          
              <div
                className={`tab`}
              >
              </div>
          </div>
          <div className="tab-content bg-[#fff] h-auto  rounded-s-sm  bg-[#ffff]	
            ">
            {activeTab === 1 && <View />}
            {activeTab === 2 && <Collection />}
            {activeTab === 3 && <Return />}
          </div>
        </div>
      )}
    </div>):(<div><AddInvoice/></div>)}
    </>
  );
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default MainTable;