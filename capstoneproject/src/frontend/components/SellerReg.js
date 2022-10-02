import {
  Box,
  Button,
  Checkbox,
  Flex,
  Form,
  FormControl,
  FormErrorMessage, FormGroup, FormHelperText, FormLabel, HStack, Input, Radio, RadioGroup, Select, Tooltip, VStack
} from "@chakra-ui/react";
import React from 'react';


  import { Field, Formik } from 'formik';
import { addSellerData } from "../pages/api/client";


export default function RegistrationForm() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };


    const dateRegExp = /^\d{4}-\d{2}-\d{2}$/i
      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
      const confirmpasswordRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/
      const postcodeRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/i

const addSellers = () => {
    addSellerData()
}

  return (
    <div className="flex justify-center space-x-7 mt-20">
     <Flex bg="gray.100" align="bottom" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            firstname:"",
            lastname:"",
            username:"",
            email: "",
            password: "",
            gender: "",
            country: "",
            city: "",
            postcode:"",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            {addSellers(values)}
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">


                <FormControl isRequired>
                  <FormLabel htmlFor="firstname">First Name</FormLabel>
                  <Field
                    as={Input}
                    id="firstname"
                    name="firstname"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="lastname">Last Name</FormLabel>
                  <Field
                    as={Input}
                    id="lastname"
                    name="lastname"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Username</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="username"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email} isRequired>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={(value) => {
                        if (!emailRegExp.test(value)) { 
                          return "Invalid email address"; 
                        } 
                      }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password} isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      if (value.length < 6) {
                        return "Password should be over 6 characters.";
                      }
                      else if (!passwordRegExp.test(value)) { 
                         return "Password Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"; 
                      } 
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.confirmpassword && touched.confirmpassword} isRequired>
                  <FormLabel htmlFor="password">Confirm Password</FormLabel>
                  <Field
                    as={Input}
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      if (value=="") {
                        return "Please confirm your password";
                      }
                      else if (value!=password.value) {
                        return "Passwords do not match!";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.confirmpassword}</FormErrorMessage>
                </FormControl>

            <FormControl as='fieldset' isRequired>
            <FormLabel as='legend'>Gender</FormLabel>
            <Field as={RadioGroup} 
            id="gender"
            name="gender"
            type="radiogroup"
            variant="filled"
            >
                <Field as={Radio} 
                id="mgender"
                value="male"
                variant="filled"
                >Male</Field>
                <Field as={Radio} 
                id="fgender"
                value="female"
                variant="filled"
                >Female</Field>
                <Field as={Radio} 
                id="ogender"
                value="other"
                variant="filled"
                >Other</Field>
            </Field>
            </FormControl>



                <FormControl isInvalid={!!errors.postcode && touched.postcode} isRequired>
                <FormLabel>Current Address</FormLabel>

                <Field as={Select} id="country"
                name="country"
                type="country" placeholder='Select Country'
                >
                <option value="united states">United States</option>
                <option value="philippines">Philippines</option>
                <option value="vietnam">Vietnam</option>
                <option value="nigeria">Nigeria</option>
                <option value="panama">Panama</option>
                </Field>

                <Field as={Select} id="city"
                name="city"
                type="city" placeholder='Select City'
                >
                <option value="topeka">Topeka</option>
                <option value="lawrence">Lawrence</option>
                <option value="kansas city">Kansas City</option>
                <option value="manila">Manila</option>
                <option value="cebu">Cebu</option>
                </Field>

                <Field
                as={Input}
                id="postcode"
                placeholder="Enter zipcode"
                name="postcode"
                type="postcode"
                variant="filled"
                validate={(value) => {
                    if (!postcodeRegExp.test(value)) { 
                      return "Invalid ZIP code"; 
                    } 
                  }}
                />
                <FormErrorMessage>{errors.postcode}</FormErrorMessage>
                </FormControl>
                

                <Button type="submit" colorScheme="green" w="full">
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        </Box>
    </Flex>
       
    </div>
  )

}