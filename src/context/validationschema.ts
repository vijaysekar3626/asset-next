import * as Yup from "yup"
export const assetform = Yup.object({
    ownership:Yup.string().required('please select the ownership'),
    asset_name:Yup.string().required('please enter the asset name'),
    category:Yup.string().required('please select the category'),
    model:Yup.string().required('please select the model'),
    manufacturer:Yup.string().required('please select the manufacturer'),
    location:Yup.string().required('please select the location'),
})