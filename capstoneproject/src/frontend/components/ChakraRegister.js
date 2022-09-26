import React from 'react'
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Form,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack, FormGroup, RadioGroup, Select, HStack, Radio, FormHelperText, Tooltip
  } from "@chakra-ui/react";
//    import {DatePicker} from 'antd';


  import {Formik, Field} from 'formik'

export default function ChakraRegister() {
    // function validateName(value) {
    //     let error
    //     if (!value) {
    //       error = 'Name is required'
    //     } else if (value.toLowerCase() !== 'naruto') {
    //       error = "Please enter a valid name"
    //     }
    //     return error
    //   }
    //   function validateName(value) {
    //     let error
    //    if (value.toLowerCase() !== 'naruto') {
    //       error = "Please enter a valid name"
    //     }
    //     return error
    //   }

    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
      
      const dateRegExp = /^\d{4}-\d{2}-\d{2}$/i
      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
      const confirmpasswordRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/
      const postcodeRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/i


  return (
    <div>
    <Flex bg="gray.100" align="bottom" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            firstname:"",
            lastname:"",
            username:"",
            email: "",
            password: "",
            confirmpassword:"",
            dob: "",
            phonenumber: "",
            gender: "",
            country: "",
            city: "",
            postcode:"",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">


                <FormControl isRequired>
                  <FormLabel htmlFor="firstname">First Name</FormLabel>
                  <Field
                    as={Input}
                    id="firstName"
                    name="firstname"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="firstname">Last Name</FormLabel>
                  <Field
                    as={Input}
                    id="lastName"
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

        
      <FormControl isInvalid={!!errors.dob && touched.dob} isRequired>
        <FormLabel htmlFor="dob">Date of Birth</FormLabel>
        <Field
                    as={Input}
                    id="dob"
                    name="dob"
                    type="dob"
                    variant="filled"
                    validate={(value) => {
                        if (!dateRegExp.test(value)) { 
                          return "Invalid date format"; 
                        } 
                      }}
                  />
                  <FormErrorMessage>{errors.dob}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.phonenumber && touched.phonenumber} isRequired>
        <FormLabel htmlFor="phonenumber">Phone Number</FormLabel>
        <Field
                    as={Input}
                    id="phonenumber"
                    name="phonenumber"
                    type="phonenumber"
                    variant="filled"
                    validate={(value) => {
                        if (!phoneRegExp.test(value)) { 
                          return "Phone number is not valid"; 
                        } 
                      }}
                  />
                  <FormErrorMessage>{errors.phonenumber}</FormErrorMessage>
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
                id="gender"
                value="male"
                variant="filled"
                >Male</Field>
                <Field as={Radio} 
                id="gender"
                value="female"
                variant="filled"
                >Female</Field>
                <Field as={Radio} 
                id="gender"
                value="other"
                variant="filled"
                >Other</Field>
                
                {/* <RadioGroup >
                    <HStack spacing='20px'>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                        <Radio value="other">Other</Radio>
                    </HStack>
                </RadioGroup> */}
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


{/* <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>First name</FormLabel>
                <Input {...field} placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik> */}
    
    </div>
  )
}
