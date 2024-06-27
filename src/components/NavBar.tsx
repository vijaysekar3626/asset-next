import Link from "next/link";
import React from "react";
import { Row, Col } from "reactstrap";
interface BreadCrumbProps {
  title: string;
  // pageTitle : string;
}
function NavBar({ title }: BreadCrumbProps) {
  return (
    <Row>
      <Col xs={12} className="p-2 shadow-lg rounded-[10px]">
        <div className="flex items-center justify-between">
          <h4 className="mb-sm-0 font-poppins font-semibold">{title}</h4>
          <div className="">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none ">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add Asset +
              </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none ">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Assign Asset <span>&#8594;</span>
              </span>
            </button>
           
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default NavBar;
