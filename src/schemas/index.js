
import * as yup from 'yup'
// const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
// min 7 character, 3 uppercase letter, 1 lowercase letter, 1 numeric digit
export const basicSchema = yup.object().shape({
    name: yup.string().min(2).required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phone: yup.number().positive().integer().required("Required"),
    resDate: yup.date("Please enter a valid date").required("required"),
    resTime: yup.number().required("required"),
    guest: yup.number().positive().min(1),
    occasion: yup.string().required("required")
})
