import {Flex, Heading, Input } from "@chakra-ui/react";

const Home = () => 
{
  //const {toggleColorMode} = useColorMode()

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}> 
      <Flex
        direction={"column"}
        background={"gray.100"}
        p={12}
        rounded={6}
        position={'relative'}
        >
          <Heading mb={6}>Log In</Heading>

          <Input
            placeholder="Username or Email"
            variant ={"filled"}
            mb={3}
            type = "email"
          />

          <Input
            placeholder="*************"
            variant ={"filled"}
            type = "password"
            mb={6}
          />

          <Button colorScheme={"black"}> Submit </Button>

          <Box
            position={"absolute"}
            top={2}
            right={2}
            cursor={"pointer"}
          >
          </Box>
        </Flex>
    </Flex>
    )

}