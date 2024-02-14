import * as Yup from 'yup'

const validRules = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    qualiF: Yup.string().required("Qualification is required"),
    gender: Yup.string().required("Gender is required"),
    knownTech: Yup.array().min(2).required("Tech is required"),
    comment: Yup.string().required("Comment is required")
})

export default validRules