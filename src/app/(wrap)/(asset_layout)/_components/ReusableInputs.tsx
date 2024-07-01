"use client";
import { Field } from "formik";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import Flatpickr from  "react-flatpickr"
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/material_blue.css";
interface ReusableInputsProps {
  label: string;
  type: string;
  placeholder?: string;
  name?: string;
  options?: Array<{ name: string; value: string }>; // Define the shape of options array
  defaultValue?: string; // Add if you need a default value for select
  handleSelect?: any;
  handleInput?: any;
  valuefff?:string;
}

const ReusableInputs: React.FC<ReusableInputsProps> = ({
  label,
  type,
  placeholder,
  options = [],
  defaultValue,
  // handleSelect,
  name,
  
}) => {
  return (
    <div className="flex flex-col g-2 w-full">
      <label htmlFor={name} className="text-left font-poppins text-[13px] font-medium mb-2">
        {label}
      </label>
      <Field name={name}>
        {({field,form}:any)=>{
          switch (type) {
            case "text" :
              return(
                <input 
                {...field}
                className="dropdown select-search-input bg-transparent outline-none h-[40px] font-poppins text-sm"
                type={type}
                id={name}
                placeholder={placeholder} />
              );
            case "select":
              return(
                <SelectSearch
                  {...field}
                  options={options}
                  className="dropdown select-search"
                  defaultValue={defaultValue}
                  placeholder="select"
                  id={name}
                  onChange={(value) => form.setFieldValue(name, value)}
                  search
                />
              );
            case "date":
              return(
                <Flatpickr
                  {...field}
                  className="dropdown select-search-input bg-transparent outline-none h-[40px] font-poppins text-sm"
                  id={name}
                  placeholder={placeholder}
                  options={{
                    dateFormat: "Y-m-d",
                  }}
                  onChange={(date:any) => form.setFieldValue(name, date[0])}
                />
              );
          }
        }}

      </Field>
      {/* {type === "text" && (
        <input
          type={type}
          className="dropdown select-search-input bg-transparent outline-none h-[40px] font-poppins text-sm"
          name={name}
          placeholder={placeholder}
          onChange={handleInput}
          id={name}
          value={valuefff}
          
        />
      )}
      {type === "select" && (
        <SelectSearch
          options={options}
          className="dropdown select-search"
          defaultValue={defaultValue}
          placeholder="select"
          search
        />
      )}
      {type === "radio" && (
        <input type={type} className="border-b-2 bg-transparent outline-none" id={name} />
      )}
      {type === "checkbox" && (
        <input type={type} className="border-b-2 bg-transparent outline-none"  id={name} />
      )}
      {type === "phonenumber" && (
        <input type="tel" className="border-b-2 bg-transparent outline-none"  id={name} />
      )}
      {type === "file" && <Dropzone />} */}
    </div>
  );
};

export default ReusableInputs;
