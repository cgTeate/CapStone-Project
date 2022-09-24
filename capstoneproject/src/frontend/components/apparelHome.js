import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

const ProductImages = [];

export default function ApparelHome()
{
    const apparelHome = {
        imageUrl: '',
        size: 2,
        title: '',
        formattedPrice: '',
    };
    return (
        <Box>
        <Flex>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          {/*<Image src={kicksHome.imageUrl}/>*/}
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
                size {apparelHome.size} ; 
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {apparelHome.title}
            </Box>
    
            <Box>
              {apparelHome.formattedPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
              </Box>
            </Box>
          </Box>
        </Box>
        <Spacer/>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {/*<Image src={kicksHome.imageUrl}/>*/}
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
              size {apparelHome.size} ; 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {apparelHome.title}
          </Box>
  
          <Box>
            {apparelHome.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
        </Box>
        </Box>
        <Spacer/>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {/*<Image src={kicksHome.imageUrl}/>*/}
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
                size {apparelHome.size} ; 
            </Box>
            </Box>

            <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            >
            {apparelHome.title}
            </Box>

            <Box>
            {apparelHome.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
            </Box>
        </Box>
        </Box>
        <Spacer/>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {/*<Image src={kicksHome.imageUrl}/>*/}
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
              size {apparelHome.size} ; 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {apparelHome.title}
          </Box>
  
          <Box>
            {apparelHome.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
        </Box>
      </Box>
      <Spacer/>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      {/*<Image src={kicksHome.imageUrl}/>*/}
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
            size {apparelHome.size} ; 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {apparelHome.title}
        </Box>

        <Box>
          {apparelHome.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>
      </Box>
    </Box>
    <Spacer/>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    {/*<Image src={kicksHome.imageUrl}/>*/}
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
          size {apparelHome.size} ; 
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {apparelHome.title}
      </Box>

      <Box>
        {apparelHome.formattedPrice}
        <Box as='span' color='gray.600' fontSize='sm'>
        </Box>
      </Box>
    </Box>
  </Box>
        </Flex>

        </Box>
      )
    }

