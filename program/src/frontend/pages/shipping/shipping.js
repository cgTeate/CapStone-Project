import {
  Alert, Box, Button, ButtonGroup, Checkbox, Flex, FormControl, FormErrorMessage, FormGroup, FormHelperText,
  FormLabel, Heading, HStack, Input, Link, Radio, RadioGroup, Select, Spinner, Stack, Tooltip,
  VStack
} from "@chakra-ui/react";
import React, { useContext, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import CheckoutWizard from '../../components/CheckoutWizard';
import Layout from '../../layouts/Layout';
import { Field, Form, Formik } from "formik";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from "../../redux/cartSlice";

export default function ShippingScreen() {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  //   setValue,
  // } = useForm();

  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;
  // const { shippingAddress } = cart;

  const cart = useSelector((state) => state.cart);
  const {shippingAddress} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  /*
  TODO: Unsure how to use UseEffect to set field values with formik using the cookies: Will work on later
  useEffect(() => {
    setFieldValue('fullname', shippingAddress.fullname);
    setFieldValue('address', shippingAddress.address);
    setFieldValue('city', shippingAddress.city);
    setFieldValue('postcode', shippingAddress.postcode);
    setFieldValue('country', shippingAddress.country);
  }, [setFieldValue, shippingAddress]);
  */

  // const submitHandler = ({ fullName, address, city, postalCode, country }) => {
  //   dispatch({
  //     type: 'SAVE_SHIPPING_ADDRESS',
  //     payload: { fullname, address, city, postalCode, country },
  //   });
  //   Cookies.set(
  //     'shippingAddress',
  //     JSON.stringify({
  //       ...cart,
  //       shippingAddress: {
  //         fullName,
  //         address,
  //         city,
  //         postalCode,
  //         country,
  //       },
  //     })
  //   );

  //   router.push('/payment');
  // };
  const submitHandler = (values) => {
    // dispatch({
    //   type: 'SAVE_SHIPPING_ADDRESS',
    //   payload: { fullname, address, city, postalCode, country },
    // });
    dispatch(saveShippingAddress(values))
    
    // Cookies.set(
    //   'shippingAddress',
    //   JSON.stringify({
    //     // ...cart,
    //     shippingAddress: {
    //       values
    //     },
    //   })
    // );

    router.push('/payment/payment');
  };

      const postcodeRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/i
      const validateAddress = (value) => {
        if (value.length < 3) {
          return "Address should be over 2 characters.";
        }
      }
      const validatePostcode = (value) => {
        if (!postcodeRegExp.test(value)) { 
          return "Invalid ZIP code"; 
        } 
      }
    const initialValues = 
    {
      fullname:"",
      address:"",
      city: "",
      postcode:"",  
      country: "", 
  }

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
        >
          {({ handleChange, handleSubmit, setFieldValue, errors, touched, values}) => (
            <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit}>
              <h1 className="mb-4 text-xl">Shipping Address</h1>
              <VStack spacing={4} align="flex-start">
                <FormControl className="mb-4" isRequired="Please enter full name">
                  <FormLabel htmlFor="fullname">Full Name</FormLabel>
                  <Field
                     className="w-full"
                     as={Input}
                     id="fullname"
                     autoFocus
                     name="fullname"
                     type="text"
                     onChange={handleChange}
                     value={values.fullname}
                     variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.address && touched.address} isRequired="Please enter address">
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <Field
                    as={Input}
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={values.address}
                    variant="filled"
                    validate={validateAddress}
                  />
                  <FormErrorMessage>{errors.address}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired="Please enter city">
                  <FormLabel htmlFor="city">City</FormLabel>
                  <Field
                    as={Input}
                    id="city"
                    name="city"
                    type="city"
                    onChange={handleChange}
                    value={values.city}
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.postcode && touched.postcode} isRequired="Please enter postal code">
                  <FormLabel>Postal Code</FormLabel>
                  <Field
                  as={Input}
                  id="postcode"
                  name="postcode"
                  type="postcode"
                  onChange={handleChange}
                  value={values.postcode}
                  variant="filled"
                  validate={validatePostcode}
                  />
                  <FormErrorMessage>{errors.postcode}</FormErrorMessage>
                  </FormControl>
                <FormControl isRequired="Please enter country">
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <Field
                    as={Input}
                    id="country"
                    name="country"
                    type="country"
                    onChange={handleChange}
                    value={values.country}
                    variant="filled"
                  />
                </FormControl>
                <div className="mb-4 flex justify-between">
                <Button type="submit" colorScheme="yellow" w="full">
                  Next
                </Button>
                </div>
              </VStack>
            </form>
          )}
        </Formik>

      {/* <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Please enter full name',
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            {...register('address', {
              required: 'Please enter address',
              minLength: { value: 3, message: 'Address is more than 2 chars' },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            {...register('city', {
              required: 'Please enter city',
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full"
            id="postalCode"
            {...register('postalCode', {
              required: 'Please enter postal code',
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 ">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full"
            id="country"
            {...register('country', {
              required: 'Please enter country',
            })}
          />
          {errors.country && (
            <div className="text-red-500 ">{errors.country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form> */}
    </Layout>
  );
}

ShippingScreen.auth = true;