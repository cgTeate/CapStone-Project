import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Flex,
  Link,
  FormControl,
  FormErrorMessage, FormGroup, FormHelperText, FormLabel, HStack, Input, Radio, RadioGroup, Select, Tooltip, VStack, Textarea
} from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { Field, Formik, Form } from 'formik';
import { registerUser } from "../pages/api/client";

export default function RegistrationForm() {
  const router = useRouter();
  const {redirect} = router.query;

      const dateRegExp = /^\d{4}-\d{2}-\d{2}$/i
      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i
      const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
      const confirmpasswordRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/
      const postcodeRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/i

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

      const validateDOB = (value) => {
        if (!dateRegExp.test(value)) { 
          return "Invalid date format"; 
        } 
      }

      const validatePhoneNumber = (value) => {
        if (!phoneRegExp.test(value)) { 
          return "Phone number is not valid"; 
        } 
      }

      const validatePostcode = (value) => {
        if (!postcodeRegExp.test(value)) { 
          return "Invalid ZIP code"; 
        } 
      }

    const initialValues = 
    {
      firstname:"",
      lastname:"",
      email: "",
      password: "",
      usertype:"",
      phonenumber: "",
      dob: "",
      gender: "",
      address:{
        country: "",
        city: "",
        postcode:"",   
      }
  }
  
  const onSubmit = async (values) => {
      alert(JSON.stringify(values, null, 2));
    {await registerUser(values)}
    console.log(values)
    }

  return (
    <div className="flex justify-center space-x-7 mt-20">
      <Flex height={"120vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        length={"100vh"}
        direction={"column"}
        background={"gray.100"}
        p={10}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={1} fontFamily="Garamond" fontSize="30px" >
        HYPE HEADS
        </Heading>
        <Heading mb={1} fontFamily="Garamond" fontSize="20px">
        Registration Form
        </Heading>
     <Flex bg="gray.100" align="bottom" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleSubmit, errors, touched, values}) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel fontFamily="Garamond" htmlFor="firstname">First Name</FormLabel>
                  <Input
                     as={Input}
                     id="firstname"
                     name="firstname"
                     type="text"
                     onChange={handleChange}
                     value={values.firstname}
                     variant="filled"
                     size='sm'
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontFamily="Garamond" htmlFor="lastname">Last Name</FormLabel>
                  <Field
                    as={Input}
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={handleChange}
                    value={values.lastname}
                    variant="filled"
                    size='sm'
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email} isRequired>
                  <FormLabel fontFamily="Garamond" htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    variant="filled"
                    validate={validateEmail}
                    size='sm'
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password} isRequired>
                  <FormLabel fontFamily="Garamond" htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    variant="filled"
                    validate={validatePassword}
                    size='sm'
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl as='fieldset' isRequired>
                <FormLabel fontFamily="Garamond" as='legend'>Customer or Seller?</FormLabel>
                <HStack fontFamily="Garamond" spacing='30px'>
                  <Radio 
                  id="mgender"
                  value="CUSTOMER"
                  variant="filled"
                  >Customer</Radio>

                  <Radio 
                  id="mgender"
                  value="SELLER"
                  variant="filled"
                  >Seller</Radio>

                  </HStack>
                </FormControl>
        
                <FormControl isInvalid={!!errors.dob && touched.dob} isRequired>
                  <FormLabel fontFamily="Garamond" htmlFor="dob">Date of Birth</FormLabel>
                  <Field
                    as={Input}
                    id="dob"
                    name="dob"
                    type="text"
                    variant="filled"
                    onChange={handleChange}
                    value={values.dob}
                    validate={validateDOB}
                    size='sm'
                  />
                  <FormErrorMessage>{errors.dob}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.phonenumber && touched.phonenumber} isRequired>
                  <FormLabel fontFamily="Garamond" htmlFor="phonenumber">Phone Number</FormLabel>
                  <Field
                    as={Input}
                    id="phonenumber"
                    name="phonenumber"
                    type="text"
                    onChange={handleChange}
                    value={values.phonenumber}
                    variant="filled"
                    validate={validatePhoneNumber}
                    size='sm'
                  />
                  <FormErrorMessage>{errors.phonenumber}</FormErrorMessage>
                </FormControl>

                <FormControl as='fieldset' isRequired>
                <FormLabel fontFamily="Garamond" as='legend'>Gender</FormLabel>
                <HStack fontFamily="Garamond" spacing='15px'>
                {/* <Field as={RadioGroup} 
                  id="gender"
                  name="gender"
                  type="radiogroup"
                  onChange={handleChange}
                  value={values.gender}
                  variant="filled"
                > */}
                  <Radio 
                  id="mgender"
                  value="MALE"
                  variant="filled"
                  >Male </Radio>

                  <Radio 
                  id="mgender"
                  value="FEMALE"
                  // variant="filled"
                  >Female </Radio>

                  <Radio 
                  id="mgender"
                  value="OTHER"
                  // variant="filled"
                  >Other </Radio>
                  </HStack>
                </FormControl>

                <FormControl isInvalid={!!errors.postcode && touched.postcode} isRequired>
                <FormLabel fontFamily="Garamond">Current Address</FormLabel>

                <Field as={Select} id="address.country"
                name="address.country"
                type="country" placeholder='Select Country'
                onChange={handleChange}
                value={values.address.country}
                size='sm'
                >
                <option value="United States">United States</option>
                <option value="Philippines">Philippines</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Panama">Panama</option>
                </Field>

                <Field as={Select} id="address.city"
                name="address.city"
                type="city" placeholder='Select City'
                onChange={handleChange}
                value={values.address.city}
                size='sm'
                >
                <option value="Topeka">Topeka</option>
                <option value="Lawrence">Lawrence</option>
                <option value="Kansas City">Kansas City</option>
                <option value="Manila">Manila</option>
                <option value="Cebu">Cebu</option>
                </Field>

                <Field
                as={Input}
                id="address.postcode"
                placeholder="Enter zipcode"
                name="address.postcode"
                type="postcode"
                onChange={handleChange}
                value={values.address.postcode}
                variant="filled"
                validate={validatePostcode}
                size='sm'
                />
                <FormErrorMessage>{errors.postcode}</FormErrorMessage>
                </FormControl>
              
                <Button type="submit" fontFamily="Garamond" colorScheme="green" w="full" size='sm'>
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <div fontFamily="Garamond"className="mb-4 ">
          Don&apos;t have an account? &nbsp;
          <Link href={`/RegistrationPage?redirect=${redirect || '/'}`}>Register</Link>
          </div>
        </Box>
    </Flex>
    </Flex>  
    </Flex>  
    </div>
  )

}