import * as yup from "yup";

export const userSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required()
})

export const loginSchema = yup.object().shape({
    email: yup.string()
      .max(30, 'Must be 30 characters or less')
      .email('Invalid email address')
      .required('Please enter your email'),
    password: yup.string().required('Please enter your password')
  })