import * as  yup from 'yup';
// import {date, object} from 'yup'

const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Invalid email format Try again').required(),
    password:yup.string().min(4).max(15).required(),
    confirmPassword:yup.string().oneOf([yup.ref("password"), null]),
    phoneNumber: yup.number().min(10).max(12).required(),
    file:yup.mixed().required(),
    member:yup.number().positive().required(),
    date:yup.number().required(),

})

export default userSchema;

// file: yup.mixed().required(),
//     address:yup.string().number().required(),
//     date:yup.date().number().required()