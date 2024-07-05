"use client";
import React, { useEffect, useState } from "react";
import ReusableInputs from "../_components/ReusableInputs";
import { Formik } from "formik";
import { assetform, assetvendorform } from "@/context/validationschema";
import ReusableTable from "../_components/ReusableTable";
import { assetTable } from "@/context/tableData";
import { useSelector } from "react-redux";
import Button from "@/components/Button";

function page() {
  const navstate = useSelector((state:any)=>state.nav)
  const [vendor, SetVendor] = useState(true);
  const tableheader = Object.keys(assetTable[0]);

  const [showaddForm, setShowaddForm] = useState(false);
  const [showassignForm, setShowassignForm] = useState(false);
  

  useEffect(()=>{
    if(navstate.action === 'addasset'){
      setShowaddForm(true)
    }
    else{
      setShowaddForm(false)
    }
  }, [navstate.action]);

  const handleSubmit =(values:any,actions:any)=>{
      const formData = {
        ...values,
        vendor:vendor,
      }
      console.log('formData: ', formData);
      actions.resetForm();
      SetVendor(!vendor);
      if(vendor){
        
      }
      actions.setSubmitting(false);
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-between h-full">
        {!showaddForm ? (
          <ReusableTable
          header={tableheader}
          accessorKey={tableheader}
          data={assetTable}
        />
        ):(
          <div className="p-2">
            <div className="form">
              <div className="p-2">Add Asset</div>
              <Formik
                initialValues={{
                  ownership: "",
                  asset_name: "",
                  category: "",
                  model: "",
                  manufacturer: "",
                  location: "",
                  supplier:"",
                  order_num:"",
                  pur_date:"",
                  eol:"",
                  cost:"",
                  tpc:"",
                }}
                validationSchema={vendor ? assetform :assetvendorform}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit}>
                    {vendor ? (
                      <div className="grid grid-cols-2 gap-x-5 mb-5">
                        <div>
                          <ReusableInputs
                            label="Ownership"
                            type="select"
                            placeholder="please enter"
                            options={[
                              { name: "Company", value: "company" },
                              { name: "Lease", value: "lease" },
                              { name: "Employee", value: "employee" },
                            ]}
                            name={"ownership"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.ownership &&
                              touched.ownership &&
                              errors.ownership}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Asset Name"
                            type="text"
                            placeholder="please enter"
                            name={"asset_name"}
                            valuefff={values.asset_name}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.asset_name &&
                              touched.asset_name &&
                              errors.asset_name}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Category"
                            type="select"
                            options={[
                              { name: "Laptop", value: "laptop" },
                              { name: "Mouse", value: "mouse" },
                              { name: "Keyboard", value: "keyboard" },
                            ]}
                            name={"category"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.category &&
                              touched.category &&
                              errors.category}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Model"
                            type="select"
                            placeholder="please enter"
                            options={[
                              { name: "GF3366", value: "gf3366" },
                              { name: "MSI-Katana", value: "msi-katana" },
                              { name: "ASUS-TUF", value: "asus-tuf" },
                            ]}
                            name={"model"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.model && touched.model && errors.model}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Manufacturer"
                            type="select"
                            placeholder="please enter"
                            options={[
                              { name: "HP", value: "hp" },
                              { name: "ASUS", value: "asus" },
                              { name: "MSI", value: "msi" },
                            ]}
                            name={"manufacturer"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.manufacturer &&
                              touched.manufacturer &&
                              errors.manufacturer}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Location"
                            type="select"
                            options={[
                              { name: "confrence 1", value: "confrence1" },
                              { name: "confrence 2", value: "confrence2" },
                              { name: "confrence 3", value: "confrence3" },
                            ]}
                            name={"location"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.location &&
                              touched.location &&
                              errors.location}
                          </p>
                        </div>
                      </div>
                    ) :
                    (
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div>
                          <ReusableInputs
                            label="Supplier"
                            type="select"
                            placeholder="please enter"
                            options={[
                              { name: "Company", value: "company" },
                              { name: "Lease", value: "lease" },
                              { name: "Employee", value: "employee" },
                            ]}
                            name={"supplier"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.supplier && touched.supplier && errors.supplier}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="order Number"
                            type="text"
                            placeholder="please enter"
                            name={"order_num"}
                            valuefff={values.order_num}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.order_num &&
                              touched.order_num &&
                              errors.order_num}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Purchase Date"
                            type="date"
                            name={"pur_date"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.pur_date &&
                              touched.pur_date &&
                              errors.pur_date}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="End of Life"
                            type="date"
                            placeholder="please enter"
                            name={"eol"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.eol && touched.eol && errors.eol}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Purchase Cost Per Item"
                            type="text"
                            placeholder="please enter"
                            name={"cost"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.cost &&
                              touched.cost &&
                              errors.cost}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Total Purchase Cost"
                            type="text"
                            name={"tpc"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.tpc &&
                              touched.tpc &&
                              errors.tpc}
                          </p>
                        </div>
                      </div>
                    )}
                    <Button title={vendor?'Next':'Submit'} disabled={isSubmitting} />
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
