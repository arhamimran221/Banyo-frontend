import React, { useState } from "react";
import { Modal, Select, Table, Tag, Space } from "antd";
import { DeleteOutlined, MoneyCollectOutlined ,UserOutlined} from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const AddInvoice = () => {
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "vertical"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleActionClick = (record) => {
    setSelectedRecord(record);
    showModal();
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            {" "}
            <DeleteOutlined className="text-[17px] p-2 hover:bg-[#6366f1] hover:text-white rounded" />
          </a>
          <a onClick={() => handleActionClick(record)}>
            <MoneyCollectOutlined className="text-[17px] p-2 hover:bg-[#6366f1] hover:text-white rounded" />
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div className="p-4">
      <Modal open={isModalVisible} onCancel={handleCancel} footer={null}  width={1000}>
        {selectedRecord && (
          <div>
            <div className="">Price Match</div>
            <div className="flex w-[100%]">
              <div className="w-[50%]">
                <div>Name: {selectedRecord.name}</div>
                <div>Age: {selectedRecord.age}</div>
                <div>Address: {selectedRecord.address}</div>
                <div>
                  Tags:{" "}
                  {selectedRecord.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
              <div className="w-[50%]">
              <Form
            layout="vertical"
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            className="Add-vehicle-form"
          >
            <div className="form-input-fields flex">
              <Form.Item
                className="w-[100%]"
                label="Vehicle Name"
                name="vehicleName"
                rules={[
                  { required: true, message: "Please enter the vehicle name!" },
                ]}
              >
                <Input className="w-[200px]"/>
              </Form.Item>

              <Form.Item
                className="w-[100%]"
                label="Vehicle Company"
                name="vehicleCompany"
                rules={[
                  {
                    required: true,
                    message: "Please enter the vehicle Company!",
                  },
                ]}
               >
                <Input  className="w-[200px]"/>
              </Form.Item>
            </div>

            <Form.Item
              className="w-[100%]"
              label="License Plate"
              name="licensePlate"
              rules={[
                { required: true, message: "Please enter the license plate!" },
              ]}
            >
              <Input className="w-[100%]"/>
            </Form.Item>

            <Form.Item
             className="w-[100%]"
              label="Year"
              name="year"
              rules={[{ required: true, message: "Please enter the year!" }]}
            >
              <Input               className="w-[100%]"
/>
            </Form.Item>

           

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <button type="primary" htmlType="submit">
                Add Vehicle
              </button>
            </Form.Item>
          </Form>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <div className="flex justify-between mb-5 gap-6">
        <div className="">
          <div className="text-lg font-medium text-[#5c586b]"><UserOutlined className="mr-2 text-xl text-[#beb7f8] font-light"/>Customer Details</div>
          <div className="flex justify-between mb-2 mt-5 items-center">
            <div className="">Name</div>
            <div className="">Thomas Shelby</div>
          </div>
          <div className="flex justify-between mb-2 items-center">
            <div className="">Balance</div>
            <div className="">£98.00</div>
          </div>
          <div className="flex justify-between mb-2 items-center">
            <div className="">Available </div>
            <div className="">£1198.00</div>
          </div>{" "}
          <div className="flex justify-between gap-8 mb-1 items-center">
            <div className="w-[106px]">Customer Ref </div>
            <div className="">
              <input type="text" placeholder="placeholder" className=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-[0.325rem] "  required/>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-medium text-[#5c586b]">Invoice To:</div>
          <div className="mt-5">
            <textarea name="" id="" cols="40" rows="8" className=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-[0.325rem] " placeholder="Customer default address"></textarea>
          </div>
        </div>
        <div>
          <div className="text-lg font-medium text-[#5c586b]">Deliver To:</div>
          <div className="mt-5">
            <textarea name="" id="" cols="40" rows="8" className=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-[0.325rem] " placeholder="Placeholder"></textarea>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
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
          <Table columns={columns} dataSource={data} />
          <div className=""></div>
        </div>
        <div className="flex justify-between px-32	py-5 border-y-2 border-gray-300">
          <div className="border border-gray-300 rounded p-8 ">
            <div className="">
              <div className="flex items-center gap-8 mb-2">
              <div className="">Payment Method </div>
              <div className="">
              <Select
            value={selectedCountry}
            onChange={(value) => {
              handleCountryChange(value);
            }}
            className="mt-1 h-[32px] block w-[170px]"
          >
            <Option value="United Kingdom">Japan</Option>
            <Option value="Pakistan">India</Option>
            <Option value="India">Turkey</Option>
            <Option value="Canada">Dubai</Option>
            <Option value="Other">Other Country</Option>
          </Select>
              </div>
              </div>
              <div className="flex justify-between gap-8 mb-2 items-center">
            <div className="w-[106px]">Customer Ref </div>
            <div className="">
              <input type="text" placeholder="placeholder" className=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-[0.325rem] "  required/>
            </div>
          </div>  <div className="flex justify-between gap-8 mb-2 items-center">
            <div className="w-[106px]">Customer Ref </div>
            <div className="">
              <input type="text" placeholder="placeholder" className=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-[0.325rem] "  required/>
            </div>
          </div>  <div className="flex justify-between gap-8 mb-2 items-center">
            <div className="w-[106px]">Customer Ref </div>
            <div className="">
              <input type="text" placeholder="placeholder" className=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-[0.325rem] "  required/>
            </div>
          </div>  
            </div>
          </div>
          <div className="">
          <div className="">
                <div className="mb-2 flex gap-8 justify-between">
                   <div>Payment Method:</div> 
                   <div>Cash</div>
                </div>
                <div className="mb-3 flex gap-8 justify-between">
                   <div>Discount:</div> 
                   <div>£00.00 </div>
                </div>
                <div className="mb-3 flex gap-8 justify-between">
                   <div>Net Amount:</div> 
                   <div>£724.36 </div>
                </div>
                <div className="mb-2 flex gap-8 justify-between border-t-2 border-gray-300 pt-2">
                   <div>VAT Amount:</div> 
                   <div>£144.87 </div>
                </div>
                <div className="mb-3 flex gap-8 justify-between  border-b-2 border-gray-300 pb-2">
                   <div>Gross Total:</div> 
                   <div>£869.23 </div>
                </div>
                <div className="mb-3 flex gap-8 justify-between">
                   <div>Amount Due:</div> 
                   <div>£869.23 </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInvoice;
