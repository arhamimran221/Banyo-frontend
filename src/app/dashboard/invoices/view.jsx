"use client";

import React from "react";
import { AndroidOutlined, AppleOutlined,SendOutlined,FileMarkdownOutlined ,MoneyCollectOutlined,PrinterOutlined,RollbackOutlined} from "@ant-design/icons";
import { Tabs } from "antd";
const view = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-12 gap-2 bg-[#f8f7fa]">
      <div className="col-span-4 row-span-6 bg-[#ffff]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4 rounded">
        <div className="flex w-[100%] content-center gap-[68px]">
          <div className="w-[25%]">
            <div>
              <div className="text-xl font-medium text-[#5c586b]">Store</div>
              <div className=" text-sm mt-5 mb-9 leading-6">Store Street Address <br/>City, Postcode<br/> Phone Number</div>
            </div>
            <div className="mt-[68px]">
              <div className="text-[15px] text-[#5c586b]">Invoice Address:</div>
              <div className=" text-sm mt-5 mb-9 leading-6">
                Thomas shelby <br/>Shelby Company Limited <br/>Small Heath, B10 0HF, UK<br/>
                718 986 6062 <br/>peakyFBlinders@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[45%] flex gap-8 	">
              <div>
                <button className='bg-[#ddf6e9] px-4 py-1 rounded text-[#3fcf7e] uppercase text-[12px]'>Invoice paid </button>
              </div>
              <div>
                <button className='bg-[#ddf6e9] px-4 py-1 rounded text-[#3fcf7e] uppercase text-[12px]'>item Recieved</button>
              </div>
          </div>
          <div className="w-[35%]">
            <div className="">
              <div className="text-xl font-[400] text-[#5c586b]">Invoice 3492</div>
              <div className=" text-sm mt-5 mb-9 leading-6">
                Thomas shelby <br/>Shelby Company Limited <br/>Small Heath, B10 0HF, UK<br/>
                718 986 6062 
              </div>
            </div>
            <div>
              <div className="">
                <div className="text-[15px] mt-[44px] text-[#5c586b]">Invoice Address:</div>
                <div className=" text-sm mt-5 mb-9 leading-6">
                Thomas shelby <br/>Shelby Company Limited <br/>Small Heath, B10 0HF, UK<br/>
                718 986 6062 <br/>peakyFBlinders@gmail.com
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b text-[15px]">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          First
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Thornton
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          @twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex mt-12 gap-4 w-[100%]">
            <div className="text-sm mt-5 mb-9 leading-6 w-[70%]">
              All goods belong to Banyo Ltd until paid in full. Returns accepted
              up to 30 days from invoice date if unused and in the original
              unopened packaging. After 30 days a 25% restocking charge will
              apply. Special order items cannot be returned.
              <div className="mt-5">
              <div className="text-[15px] text-[#5c586b] font-[600]">Bank Details</div>
              <div className="flex gap-8 mt-5">
                <div className="">Account Name: <br/>Sort Code: <br/>Account Number:</div>
                <div className="">Banyo Ltd<br/> 20 00 00 <br/>543524141345</div>
              </div></div>
            </div>     
            <div className="text-sm mt-5 mb-9 leading-9	 w-[30%]">
              <div className="flex gap-8">
                <div className="">
                  Payment Method:<br/> Discount: <br/>Net Amount:<br/> VAT Amount:<br/> Gross Total:<br/>
                  Amount Due:{" "}
                </div>
                <div className="">
                  Cash <br/>£00.00 <br/>£724.36 <br/>£144.87 <br/>£869.23 <br/>£869.23
                </div>
              </div>
            </div>
          </div>
          <div className="border-y-2 border-[#ededef]">
            <div className="py-4">
            <div className="flex items-center text-[15px] text-[#5c586b] font-[600]">Notes:</div>
           </div>
           </div>
           <div className="flex justify-between mt-5">
            <div>
            <div className="flex gap-3">
           <div className="text-sm ">Banyo Ltd Company Number</div>
           <div className="text-[15px] text-[#5c586b] font-[600]">3955869</div></div>
           <div className="flex gap-3">
           <div className="text-sm ">Banyo Ltd Company Number</div>
           <div className="text-[15px] text-[#5c586b] font-[600]">3955869</div></div>
            </div>
            <div>
            <div className="flex gap-3">
           <div className="text-sm ">Banyo Ltd Company Number</div>
           <div className="text-[15px] text-[#5c586b] font-[600]">3955869</div></div>
            </div>
           </div>
        </div>
      </div>
      <div className="row-span-2 col-start-5 bg-[#ffff]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-3 h-fit	rounded">
        <div className="flex flex-col items-center gap-y-2">
          <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
            <button className=" py-1 px-6 text-white text-center text-sm"><SendOutlined className="mr-1"/>Email Invoice</button>
          </div>
          <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
            <button className=" py-1 px-6 text-white text-center text-sm"><FileMarkdownOutlined className="mr-1"/>Download</button>
          </div>
          <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
            <button className=" py-1 px-6 text-white text-center text-sm"><PrinterOutlined className="mr-1"/>Print</button>
          </div>
          <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
            <button className=" py-1 px-6 text-white text-center text-sm"><RollbackOutlined className="mr-1"/>Return</button>
          </div>
          <div className="w-[100%] bg-[#f1f1f2] text-center rounded-md">
            <button className=" py-1 px-6 text-[#989a9c] text-center text-sm"><MoneyCollectOutlined className="mr-1"/>Add Payment</button>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-start-5 row-start-3 bg-[#ffff]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-[100px] p-3 mt-[-278px] rounded">
        <div className="flex flex-col items-center gap-y-2">
          <div className="w-[100%] bg-[#7367f0] text-center rounded-md">
            <button  className=" py-1 px-6 text-white text-center text-sm"><RollbackOutlined className="mr-1"/>Return</button>
          </div>
          <div className="w-[100%] bg-[#f1f1f2] text-center rounded-md">
            <button className=" py-1 px-6 text-[#989a9c] text-center text-sm"><MoneyCollectOutlined className="mr-1"/>Add Payment</button>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-start-5 row-start-5 bg-[#ffff]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4 mt-[-463px] h-fit rounded">
        <Tabs
          defaultActiveKey="1"
          items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
            const id = String(i + 1);
            return {
              label: (
                <span>
                  <Icon />
                  Tab {id}
                </span>
              ),
              key: id,
              children: `Tab ${id}`,
            };
          })}
          
        />
      </div>
      <div className="col-span-5 row-span-2 row-start-7 bg-[#ffff]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4 rounded">
        <div className="text-lg font-[500] border-b-2 border-[#dbdade] pb-3 text-[#5c586b]">Internal Notes</div>
        <div className="flex border-b-2 border-[#dbdade] w-[100%] py-3 font-[600]">
          <div className="w-[35%] text-[#5c586b]">SKU</div>
          <div className="w-[35%] text-[#5c586b]">Name</div>
          <div className="w-[35%] text-[#5c586b]">Internal Notes</div>
        </div>
        <div className=" flex w-[100%] border-b-2 border-[#dbdade] pb-3 mt-3">
          <div className="w-[35%] text-sm">FRANKE TP125 </div>
          <div className="w-[35%] text-sm">WASTE DISPOSAL UNIT</div>
          <div className="w-[35%] text-sm text-[#6f6b7c]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            iusto corrupti adipisci repudiandae a veniam reprehenderit nihil
            omnis, aperiam facilis nulla ad. Commodi ducimus provident nihil
            exercitationem ad autem iusto!
          </div>
        </div>
        <div className="flex w-[100%] mt-3">
          <div className="w-[35%] text-sm">FRANKE TP125 </div>
          <div className="w-[35%] text-sm">WASTE DISPOSAL UNIT</div>
          <div className="w-[35%] text-sm text-[#6f6b7c]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            iusto corrupti adipisci repudiandae a veniam reprehenderit nihil
            omnis, aperiam facilis nulla ad. Commodi ducimus provident nihil
            exercitationem ad autem iusto!
          </div>
        </div>
      </div>
      <div className="col-span-5 row-span-2 row-start-9 bg-[#ffff]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4 rounded">
        <div className="text-lg font-[500] border-b-2 border-[#dbdade] pb-3 text-[#5c586b]">Comments</div>
        <div className="flex w-[100%] mt-5 items-center border-b-2 border-[#dbdade] pb-3">
          <div className="w-[10%]">hello</div>
          <div className="w-[90%] ">
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
        <div className="flex w-[100%] mt-5 border-t-2 border-[#dbdade] ">
          <div className="w-[50%] mt-4"><input type="text" placeholder=''/></div>
          <div className="w-[50%] mt-4 text-right mr-3"><button className="bg-[#6366F1] text-white p-2 rounded"> Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default view;
{
  /* <div className="col-span-4 row-span-9 bg-[#ffff] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">

</div> */
}
