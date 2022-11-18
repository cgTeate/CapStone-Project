import {
  Flex,
  Heading,
  Input,
  Button,
  Box,
  Stack,
  Checkbox,
  Link,
  ButtonGroup, Spinner, Alert
} from "@chakra-ui/react";
import { Divider } from "antd";
import { Field, Formik, Form } from "formik";
import { userSchema } from "../Validations/UserValidation";
import { loginUser } from "../pages/api/client";
import { loginPending,loginSuccess, loginFail } from "../redux/loginSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import {getUserProfile} from '../redux/userAction'
import { useState, useEffect} from 'react'

export default function login() {
  const {isLoading, isAuth, error} = useSelector((state) => state.login);
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const {redirect} = router.query;
useEffect(()=>{
console.log("component is mounted");
if(user){
  router.push(redirect || "/");
}
}, [router, user, redirect]);


  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    // e.preventDefault();
    dispatch(loginPending())
      try {
        const isAuth = await loginUser(values);
        if (isAuth.status === 403) {
          return dispatch(loginFail("Incorrect email or password!"));
        } else {
          dispatch(loginSuccess())
          dispatch(getUserProfile())
          router.push("/");
        }
    }
    catch (error){
      dispatch(loginFail("Server Error: " + error));
    }
  };

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        direction={"column"}
        background={"gray.100"}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={8} fontFamily="Garamond" fontSize="50px">
          {" "}
          HYPE HEADS
        </Heading>
        <Heading mb={8} fontFamily="Garamond">
          SIGN IN
        </Heading>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          background={"gray.100"}
        >
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              ></Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            ></Box>
              {error && <Alert variant="danger">{error}</Alert>}
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ handleChange, handleSubmit, errors, touched, values }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      variant={"filled"}
                      mb={6}
                      size="lg"
                      value={values.email}
                      onChange={handleChange}
                    />

                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      variant={"filled"}
                      mb={6}
                      value={values.password}
                      onChange={handleChange}
                    />

                    <Button
                      colorScheme="blue"
                      fontFamily={"Garamond"}
                      variant="solid"
                      type="submit"
                    >
                      {" "}
                      Submit
                    </Button>
                    {isLoading && <Spinner variant="primary" animation="grow"/>}
                  </Stack>
                </form>
              )}
            </Formik>
          </Box>

          {/* <Checkbox defaultChecked fontFamily={"Garamond"} colorScheme="blue">
            REMEBER ME
          </Checkbox> */}
          <br />
          <div className="mb-4 ">
          Don&apos;t have an account? &nbsp;
          <Link href="/RegistrationPage">Register</Link>
          </div>
          <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link>
          <Divider orientation="horizontal" />
        </Box>
      </Flex>
    </Flex>
  );
}
