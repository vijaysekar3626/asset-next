import React from 'react'
import { Placeholder } from 'reactstrap'
type props = {
    label:string,
    type:string,
    placeholder:string
}
const  ReusableInputs = ({label,type,placeholder}:props) => {
  return (
    <div className="flex flex-col g-2">
        <label htmlFor='' className='text-left font-poppins'>{label}</label>
        {type === "text" && <input type={type} className='border-b-2 bg-transparent outline-none' placeholder={placeholder}/>}
        {type === "select" && <input type={type} className='border-b-2 bg-transparent outline-none'/>}
        {type === "radio" && <input type={type} className='border-b-2 bg-transparent outline-none'/>}
        {type === "checkbox" && <input type={type} className='border-b-2 bg-transparent outline-none'/>}
        {type === "phonenumber" && <input type={type} className='border-b-2 bg-transparent outline-none'/>}

        
    </div>
  )
}

export default ReusableInputs