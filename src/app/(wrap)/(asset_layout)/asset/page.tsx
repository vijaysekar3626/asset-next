'use client'
import React from "react";
import ReusableInputs from "../_components/ReusableInputs";
import { Formik } from 'formik';
import * as Yup from "yup"

function page() {
  let validation = Yup.object({
    ownership:Yup.string().required('please select the ownership')
  })
  return (
    <div className="w-full">
      <div className="p-2">
        <div className="form">
          <div className="p-2">Add Asset</div>
          <Formik
       initialValues={{ ownership: '',asset_name:"",category:"", model: '',manufacturer:"",location:"", }}
       validationSchema={validation}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
        errors,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="">
              <ReusableInputs
                label="Ownership"
                type="select"
                placeholder="please enter"
                options={[
                  { name: 'Company', value: '1' },
                  { name: 'Lease', value: '2' },
                  { name: 'Employee', value: '3' },
                ]}
                name={"ownership"}
                
              />
              <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">{errors.ownership}</p>
              </div>
              <ReusableInputs
                label="Asset Name"
                type="text"
                placeholder="please enter"
                name={"asset_name"}

              />
              <ReusableInputs
                label="Category"
                type="select"
                options={[
                  { name: 'Laptop', value: '1' },
                  { name: 'Mouse', value: '2' },
                  { name: 'Keyboard', value: '3' },
                ]}
                name={"category"}

              />
              <ReusableInputs
                label="Model"
                type="select"
                placeholder="please enter"
                options={[
                  { name: 'Company', value: '1' },
                  { name: 'Lease', value: '2' },
                  { name: 'Employee', value: '3' },
                ]}
                name={"modal"}

              />
              <ReusableInputs
                label="Manufacturer"
                type="select"
                placeholder="please enter"
                options={[
                  { name: 'HP', value: 'hp' },
                  { name: 'ASUS', value: 'asus' },
                  { name: 'MSI', value: 'msi' },
                ]}
                name={"manufacturer"}

              />
              <ReusableInputs
                label="Location"
                type="select"
                options={[
                  { name: 'confrence 1', value: 'confrence1' },
                  { name: 'confrence 2', value: 'confrence2' },
                  { name: 'confrence 3', value: 'confrence3' },
                ]}
                name={"location"}

              />
            </div>
           
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
        </div>
      </div>
    </div>
  );
}

export default page;
