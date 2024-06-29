"use client";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

interface ReusableInputsProps {
  label: string;
  type: string;
  placeholder?: string;
  name?: string;
  options?: Array<{ name: string; value: string }>; // Define the shape of options array
  defaultValue?: string; // Add if you need a default value for select
  handleSelect?: (selectedValue: string) => void;
  handleChange?: ()=> void;
  handleblur?: ()=> void;
  values?:string
}

const ReusableInputs: React.FC<ReusableInputsProps> = ({
  label,
  type,
  placeholder,
  options = [],
  defaultValue,
  handleSelect,
  name,
  handleChange,
  handleblur,
  values
}) => {
  const [files, setFiles] = useState([]);
  return (
    <div className="flex flex-col g-2 w-full">
      <label htmlFor={name} className="text-left font-poppins text-sm mb-2">
        {label}
      </label>
      {type === "text" && (
        <input
          type={type}
          className="border-b-2 bg-transparent outline-none h-[40px] font-poppins text-sm"
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleblur}
          id={name}
          value={values}
          
        />
      )}
      {type === "select" && (
        <SelectSearch
          options={options}
          className="hover:border-[#f2f2f2] dropdown select-search"
          defaultValue={defaultValue}
          onChange={handleSelect as any}
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
      {type === "file" && <Dropzone />}
    </div>
  );
};

export default ReusableInputs;
