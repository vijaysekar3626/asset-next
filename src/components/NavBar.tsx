"use client";
import { setNavAction } from "@/app/slice/navSlice";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { Row } from "reactstrap";
import Button from "./Button";

function NavBar() {
  const pathname = usePathname();
  const title = pathname.split("/").pop();
  const dispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(setNavAction({ action: `add${title}` }));
  };

  const handleAssignClick = () => {
    dispatch(setNavAction({ action: `assign${title}` }));
  };
  return (
    <div className="">
      <Row>
        <div className="flex items-center justify-between flex-wrap page-title-box">
          <h4 className="mb-sm-0 font-poppins font-semibold uppercase pl-2">
            {title}
          </h4>
          <div className="">
            <Button title={`Add ${title}+`} onClick={handleAddClick}/>
            <Button title={`Assign ${title}→`} onClick={handleAssignClick}/>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default NavBar;
