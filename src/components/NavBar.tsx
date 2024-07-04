"use client";
import { setNavAction } from "@/app/slice/navSlice";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col } from "reactstrap";

function NavBar() {
  const pathname = usePathname()
  const title = pathname.split('/').pop()
   const dispatch = useDispatch();
   const handleAddClick = () => {
    dispatch(setNavAction({ action: `add${title}`}));
  };

  const handleAssignClick = () => {
    dispatch(setNavAction({ action: `assign${title}`}));
  };
  return (
    <div className="">
      <Row>
        <div className="flex items-center justify-between flex-wrap page-title-box">
          <h4 className="mb-sm-0 font-poppins font-semibold uppercase pl-2">
            {title}
          </h4>
          <div className="">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:outline-none"
              onClick={handleAddClick}
            >
              <span className="px-2 py-1 text-xs sm:text-sm relative sm:px-5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add {title} +
              </span>
            </button>
            <button
              className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:outline-none"
              onClick={handleAssignClick}
            >
              <span className="px-2 py-1 text-xs sm:text-sm relative sm:px-5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Assign {title} <span>&#8594;</span>
              </span>
            </button>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default NavBar;
