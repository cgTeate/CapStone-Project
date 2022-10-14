import {
  Box, Button, ButtonGroup, Checkbox, Flex, FormControl,
  FormErrorMessage, FormHelperText, Heading, Input, Link, VStack
} from "@chakra-ui/react";
import { Divider } from "antd";
import { userSchema } from "../Validations/UserValidation";
import { useState } from 'react';
import { signIn, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Field, Form, Formik, useFormik } from 'formik';

export default function login()
{
  const router = useRouter();
  const [error, setError] = useState(null);
  // const createUser = async (e) => {
  //   e.preventDefault()
  //   let formData = {
  //     email: e.target[0].value,
  //     password: e.target[1].value
  //   };
  //   const isValid = await userSchema(formData);
  // }

      const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i

      const validateEmail = (value) => {
        if (!emailRegExp.test(value)) { 
          return "Invalid email address"; 
        } 
      }

      const validatePassword = (value) => {
        if (value.length < 6) {
          return "Password should be over 6 characters.";
        }
        else if (!passwordRegExp.test(value)) { 
           return "Password Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"; 
        } 
      }

  const initialValues = 
    {
      email: "",
      password: "",
  }

  const onSubmit = async (values,{ setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
  // {await checkSeller(values)}
  console.log(values)
  const res = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
    callbackUrl: `${window.location.origin}`,
  });
   console.log(res)
  // if (res?.error) {
  //   setError(res.error);
  // } else {
  //   setError(null);
  // }
  // if (res.url) router.push(res.url);
  setSubmitting(false);
  }

  return (

    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
  >
    {({ handleChange, handleSubmit, errors, touched, values}) => (
      <form onSubmit={handleSubmit}>
        
        <Flex 
      height={"100vh"} 
      alignItems={"center"} 
      justifyContent={"center"}>
    <Flex
        direction={"column"}
        background={"gray.100"}
        p={12}
        rounded={6}
        position={'relative'}
        >
    <Heading mb={8} fontFamily= "Garamond" fontSize= "50px"> HYPE HEADS</Heading>
    <Heading mb={8} fontFamily= "Garamond" >SIGN IN</Heading>
    <Box 
      maxW='sm' 
      borderWidth='1px' 
      borderRadius='lg' 
      overflow='hidden' 
      background={"gray.100"}>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          
        </Box>
        {/* <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />

                <div className="text-red-400 text-md text-center rounded p-2">
                  {error}
                </div> */}
        <VStack spacing={4} align="flex-start">
                
        <FormControl isInvalid={!!errors.email && touched.email} isRequired>
                  <Field
                    as={Input}
                    placeholder="Username or Email"
                    mb={6}
                    size = 'lg'
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

                <FormControl isInvalid={!!errors.password && touched.password} isRequired>
                  <Field
                    as={Input}
                    placeholder="Password"
                    mb={6}
                    size = 'lg'
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
        </VStack>
        </Box>
        
        <Checkbox defaultChecked fontFamily={"Garamond"} colorScheme='blue'>
          REMEBER ME</Checkbox><br/>
        
        <Link fontFamily={"Garamond"}>
          FORGOT PASSWORD
        </Link>
        <Divider orientation='horizontal'/>
        <Button 
          type="submit"
          colorScheme='blue' 
          fontFamily={"Garamond"}
          variant='solid'> Submit 
        </Button>  
      </Box>
      </Flex> 
      </Flex>
        
      </form>
    )}
  </Formik>
  )
}

// // This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context) {
// //   const session = await getSession(context)

// //   if (session) {
// //     return {
// //         redirect: { destination: '/' }
// //     }
// // }
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }