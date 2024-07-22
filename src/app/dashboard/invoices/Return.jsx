"use client";
import React, { useState } from 'react';
import { AndroidOutlined, AppleOutlined, SendOutlined, FileMarkdownOutlined, MoneyCollectOutlined, PrinterOutlined, RollbackOutlined } from "@ant-design/icons";
import { Button, Table } from 'antd';
import { Tabs } from "antd";

const columns = [
  {
    title: 'ID',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'TYPE',
    dataIndex: 'age',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'RETURN DATE',
    dataIndex: 'age',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: 'VERIFIED BY',
    dataIndex: 'address',
     sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    status: 'Pending',
  });
}

const Return = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1"); // Initialize activeTab

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const paginationConfig = {
    total: data.length,
    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
    defaultPageSize: 5,
    showQuickJumper: true,
  };

  const handleRenderingTab = (record) => {
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const hasSelected = selectedRowKeys.length > 0;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div className="bg-[#f8f7fa]">
      <div className="grid grid-cols-5 grid-rows-7 gap-2 bg-[#f8f7fa]">
        <div className="col-span-4 row-span-4 bg-[#ffff] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded p-4 h-fit">
          <div className="flex justify-between items-center mb-3">
            <div className="text-xl font-medium text-[#5c586b]">Credit Notes</div>
            <div>
              <button className="font-normal rounded rounded-xl bg-indigo-600 gap-3 px-3 py-2 text-white text-sm">Mark as Complete</button>
            </div>
          </div>
          <Table  columns={columns} dataSource={data} pagination={paginationConfig} onChange={onChange}/>
        </div>
        <div className="row-span-2 col-start-5 bg-[#ffff] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded p-3 h-fit">
          <div className="flex flex-col items-center gap-y-2">
            <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
              <button className="py-1 px-6 text-white text-center text-sm"><SendOutlined className="mr-1" />Email Invoice</button>
            </div>
            <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
              <button className="py-1 px-6 text-white text-center text-sm"><FileMarkdownOutlined className="mr-1" />Download</button>
            </div>
            <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
              <button className="py-1 px-6 text-white text-center text-sm"><PrinterOutlined className="mr-1" />Print</button>
            </div>
            <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
              <button className="py-1 px-6 text-white text-center text-sm"><RollbackOutlined className="mr-1" />Return</button>
            </div>
            <div className="w-[100%] bg-[#f1f1f2] text-center rounded-md">
              <button className="py-1 px-6 text-[#989a9c] text-center text-sm"><MoneyCollectOutlined className="mr-1" />Add Payment</button>
            </div>
          </div>
        </div>
        <div className="row-span-2 col-start-5 row-start-3 bg-[#ffff] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded p-4 mt-[-125px] h-fit">
          <Tabs
            defaultActiveKey={activeTab} // Use the state variable for the default active tab
            onChange={handleTabClick} // Handle tab change
          >
            <Tabs.TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Tab 1
                </span>
              }
              key="1"
            >
                Tab 1
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Tab 2
                </span>
              }
              key="2"
            >
              Tab 2 Content
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="col-span-5 row-span-2 row-start-5 bg-[#ffff] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded p-4">
          <div className="text-lg font-[500] border-b-2 border-[#dbdade] pb-3 text-[#5c586b]">Comments</div>
          <div className="flex w-[100%] mt-5 items-center border-b-2 border-[#dbdade] pb-3">
            <div className="w-[10%]">hello</div>
            <div className="w-[90%]">
              <div className="font-[600] text-sm text-[#6f6b7c]">Jordan</div>
              <div className="text-sm text-[#6f6b7c]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis tempora sed perferendis hic ipsam nisi aut numquam! Exercitationem, ipsa iusto? Veritatis, sunt itaque nemo quis laboriosam nihil voluptas vitae sit.</div>
              <div className="text-sm text-[#a4a2ad] mt-1">Today 11:00 AM</div>
            </div>
          </div>
          <div className="flex w-[100%] mt-5 items-center">
            <div className="w-[10%]">hello</div>
            <div className="w-[90%]">
              <div className="font-[600] text-sm text-[#6f6b7c]">Jordan</div>
              <div className="text-sm text-[#6f6b7c]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis tempora sed perferendis hic ipsam nisi aut numquam! Exercitationem, ipsa iusto? Veritatis, sunt itaque nemo quis laboriosam nihil voluptas vitae sit.</div>
              <div className="text-sm text-[#a4a2ad] mt-1">Today 11:00 AM</div>
            </div>
          </div>
          <div className="flex w-[100%] mt-5 border-t-2 border-[#dbdade]">
            <div className="w-[50%] mt-4"><input type="text" placeholder='' /></div>
            <div className="w-[50%] mt-4 text-right mr-3"><button className="bg-[#6366F1] text-white p-2 rounded">Send</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Return;
