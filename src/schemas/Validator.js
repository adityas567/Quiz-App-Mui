import * as Yup from 'yup';


const checkSchema=Yup.object().shape({
    questions:Yup.array().of(
        Yup.object().shape({
            question:Yup.string().required("This field is required"),
            correctOption:Yup.string().required("Please select an option"),
            options:Yup.array().min(2,"These options are required")
        })
    )
})

export default checkSchema;