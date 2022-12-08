import React, { useEffect, useRef } from 'react';
import { signIn, useSession } from 'next-auth/react';
import {FormControl,FormErrorMessage,FormLabel,Input, VStack, Button} from "@chakra-ui/react";
// import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import { getError } from '../utils/error';
import axios from 'axios';
const url = process.env.NEXT_PUBLIC_SPRINGBOOT_API_URL
import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux'
import { Field, Formik, Form } from "formik";
import { loginUser } from "../pages/api/client";
import { loginPending,loginSuccess, loginFail } from "../redux/loginSlice";

export default function ProfileScreen() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (formikRef.current && user!=null) {
        formikRef.current.setFieldValue(
          "firstname",
          user.slice(0,1).toUpperCase() + user.slice(1,6)
        );
        formikRef.current.setFieldValue(
          "lastname",
          user.slice(7,8).toUpperCase() + user.slice(8,13) 
        );
        formikRef.current.setFieldValue(
          "email",
          user
        );
      }
    // setFieldValue('name', session.user.name);
    // setValue('email', session.user.email);
  }, [user]);

  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
  const confirmpasswordRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/

  const validateEmail = (value) => {
    if (!emailRegExp.test(value)) { 
      return "Invalid email address"; 
    } 
  }

  const validatePassword = (value) => {
    if(value.length ==0) return;
    if (value.length < 6) {
      return "Password should be over 6 characters.";
    }
    else if (!passwordRegExp.test(value)) { 
       return "Password Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"; 
    } 
  }

  const validateConfirmPassword = (value) => {
    // if (value=="") {
    //   return "Please confirm your password";
    //     }
    // else 
    if (value!=password.value) {
      return "Passwords do not match!";
        }
    }
  
const initialValues = 
{
  firstname:"",
  lastname:"",
  email: "",
  password: "",
  confirmpassword:"",
}

const formikRef = useRef();

const onSubmit = async (values) => {
    // e.preventDefault();
      try {
        const access_Token =  sessionStorage.getItem('access_Token')
                if(!access_Token) {
                    toast.error("User Not Signed In")
                    return;
                }

        const updateres = await axios({
                    method: 'PUT',
                    url:`${url}/api/websiteuser/update/${user}`,
                    headers: {'Content-Type': 'application/json', Authorization: access_Token},
                    data:
                    JSON.stringify({
                        firstName: values.firstname,
                        lastName: values.lastname,
                        username: values.email,
                        password: values.password,
                    })
                });
                if(updateres.status == 200)
                {
                    console.log("Update successful");
                }

                const res = await axios.get(`${url}/api/token/update/${values.email}`);

                dispatch(loginPending())
                if (res.status === 403) {
                    return dispatch(loginFail("Incorrect email or password!"));
                  } else {
                    const token = res.headers.authorization
                    if(!sessionStorage.getItem('access_Token') || token!=sessionStorage.getItem('access_Token')){
                    sessionStorage.setItem('access_Token', `${token}`)
                    }
                    dispatch(loginSuccess())
                    // dispatch(getUserProfile())
                  //   router.push("/");
                  }
                  toast.success('Profile updated successfully');
                  if (res.error) {
                    toast.error(res.error);
                  }

        //! Could not do real login because spring security requires password and you could have an empty password field
        // const isAuth = await loginUser(values);
        // if (isAuth.status === 403) {
        //   return dispatch(loginFail("Incorrect email or password!"));
        // } else {
        //   dispatch(loginSuccess())
        //   dispatch(getUserProfile())
        // //   router.push("/");
        // }
        // toast.success('Profile updated successfully');
        // if (isAuth.error) {
        //   toast.error(isAuth.error);
        // }
    }
    catch (error){
      dispatch(loginFail("Server Error: " + error));
      toast.error(error)
    }
  };

return (
    <Layout title="Profile">
         <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      innerRef={formikRef}
    >
      {({ handleChange, handleSubmit, errors, touched, values, setFieldValue}) => (
        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit}>
             <h1 className="mb-4 text-xl">Update Profile</h1>
          <VStack spacing={4} align="flex-start">
            <FormControl>
            <FormLabel htmlFor="firstname">First Name</FormLabel>
                  <Field
                     as={Input}
                     id="firstname"
                     name="firstname"
                     type="text"
                     autoFocus
                     onChange={handleChange}
                     value={values.firstname}
                     variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="lastname">Last Name</FormLabel>
                  <Field
                    as={Input}
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={handleChange}
                    value={values.lastname}
                    variant="filled"
                  />
                </FormControl>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                variant="filled"
                validate={validateEmail}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                variant="filled"
                validate={validatePassword}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.confirmpassword && touched.confirmpassword}>
              <FormLabel htmlFor="confirmpassword">Confirm Password</FormLabel>
              <Field
                as={Input}
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                onChange={handleChange}
                value={values.confirmpassword}
                variant="filled"
                validate={validateConfirmPassword}
              />
              <FormErrorMessage>{errors.confirmpassword}</FormErrorMessage>
            </FormControl>
          
            <Button type="submit" colorScheme="orange" w="full">
              Update Profile
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
    </Layout>

)
}

ProfileScreen.auth = true;