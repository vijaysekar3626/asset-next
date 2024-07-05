import * as Yup from "yup"
export const assetform = Yup.object({
    ownership:Yup.string().required('please select the ownership'),
    asset_name:Yup.string().required('please enter the asset name'),
    category:Yup.string().required('please select the category'),
    model:Yup.string().required('please select the model'),
    manufacturer:Yup.string().required('please select the manufacturer'),
    location:Yup.string().required('please select the location'),
    
})
export const assetvendorform = Yup.object({
    supplier:Yup.string().required('please select the supplier'),
    order_num:Yup.string().required('please enter the order number'),
    pur_date:Yup.string().required('please enter the purchase date'),
    eol:Yup.string().required('please enter the End of Life'),
    cost:Yup.string().required('please enter the cost per item'),
    tpc:Yup.string().required('please enter the Total cost'),
})