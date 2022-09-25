import {Flex, Heading, Input, Button, Box, Stack, Checkbox, Link, ExternalLinkIcon} from "@chakra-ui/react";
import { Divider } from "antd";

// const Home = [];
//   //const {toggleColorMode} = useColorMode()
// export default function login()
// {
//   return (
//     <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}> 
//       <Flex
//         direction={"column"}
//         background={"gray.100"}
//         p={12}
//         rounded={6}
//         position={'relative'}
//         >
//           <Heading mb={6}>Log In</Heading>

//           <Input
//             placeholder="Username or Email"
//             variant ={"filled"}
//             mb={3}
//             type = "email"
//           />

//           <Input
//             placeholder="*************"
//             variant ={"filled"}
//             type = "password"
//             mb={6}
//           />

//           <Button colorScheme={"black"}> Submit </Button>

//           <Box
//             position={"absolute"}
//             top={2}
//             right={2}
//             cursor={"pointer"}
//           >
//           </Box>
//         </Flex>
//     </Flex>
//     )

// }
export default function login()
{
  return (
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
          />
        
        
          <Input
            placeholder="Password"
            variant ={"filled"}
            type = "password"
            mb={6}
          />
          </Stack>
        </Box>
        
        <Checkbox defaultChecked fontFamily={"Garamond"}>REMEBER ME</Checkbox>
        <Divider />
        <Link fontFamily={"Garamond"}>
          FORGOT PASSWORD
        </Link>
        <Divider orientation='horizontal'/>
        <Button 
          colorScheme='black' 
          size='lg' 
          fontFamily={"Garamond"}
          variant='solid'> Submit 
        </Button> 
        
      </Box>
      </Flex>
      </Flex>
      
  )
}