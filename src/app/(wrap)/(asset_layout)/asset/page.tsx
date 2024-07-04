"use client";
import React, { useEffect, useState } from "react";
import ReusableInputs from "../_components/ReusableInputs";
import { Formik } from "formik";
import { assetform } from "@/context/validationschema";
import ReusableTable from "../_components/ReusableTable";
import { assetTable } from "@/context/tableData";
import { useSelector } from "react-redux";

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
  })

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
                  leasor: "",
                }}
                validationSchema={assetform}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  SetVendor(!vendor);
                }}
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
                      <div className="grid grid-cols-2 gap-3 mb-5">
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
                    ) : (
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div>
                          <ReusableInputs
                            label="Leasor"
                            type="text"
                            placeholder="please enter leasor"
                            name={"leasor"}
                          />
                          <p className="min-h-5 text-red-500 font-poppins font-medium text-xs">
                            {errors.leasor && touched.leasor && errors.leasor}
                          </p>
                        </div>
                        <div>
                          <ReusableInputs
                            label="Leasor Agreement Number"
                            type="text"
                            placeholder="please enter aggrement number"
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
                            type="date"
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
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none "
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Submit
                      </span>
                    </button>
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
