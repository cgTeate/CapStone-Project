import {Flex, Heading, Input, Button, Box, Stack, Checkbox, Link,ButtonGroup} from "@chakra-ui/react";
import { Divider } from "antd";
import {useFormik} from "formik";
import { userSchema } from "../Validations/UserValidation";



export default function login()
{
  const formik = useFormik({
  initialVlaues:{
    email:"",
    password: "",
  },
})
  const createUser = async (event) => {
    event.preventDefault()
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value
    };
    const isValid = await userSchema(formData);
  }
  return (<form onSubmit={createUser}>
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
      
      <Stack spacing={4}>
        
           <Input
            placeholder="Username or Email"
            variant ={"filled"}
            mb={6}
            type = "email"
            size = 'lg'
            value={formik.values}
            onChange={formik.handleChange}
          />
        
        
          <Input
            placeholder="Password"
            variant ={"filled"}
            type = "password"
            mb={6}
            value={formik.values}
            onChange={formik.handleChange}
          />
          </Stack>
        </Box>
        
        <Checkbox defaultChecked fontFamily={"Garamond"} colorScheme='blue'>
          REMEBER ME</Checkbox><br/>
        
        <Link fontFamily={"Garamond"}>
          FORGOT PASSWORD
        </Link>
        <Divider orientation='horizontal'/>
        <Button 
          colorScheme='blue' 
          fontFamily={"Garamond"}
          variant='solid'> Submit 
        </Button>  
      </Box>
      </Flex> 
      </Flex>
      </form>
  )
}