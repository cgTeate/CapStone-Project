import {
  Flex,
  Heading,
  Input,
  Button,
  Box,
  Stack,
  Checkbox,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import { Divider } from "antd";
import { Field, Formik, Form } from "formik";
import { userSchema } from "../Validations/UserValidation";
import { loginUser } from "../pages/api/client";

export default function login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    alert(JSON.stringify(values, null, 2));
    {
      await loginUser(values);
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
                  </Stack>
                </form>
              )}
            </Formik>
          </Box>

          <Checkbox defaultChecked fontFamily={"Garamond"} colorScheme="blue">
            REMEBER ME
          </Checkbox>
          <br />

          <Link fontFamily={"Garamond"}>FORGOT PASSWORD</Link>
          <Divider orientation="horizontal" />
        </Box>
      </Flex>
    </Flex>
  );
}
