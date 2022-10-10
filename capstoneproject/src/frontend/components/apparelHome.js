import { Box, Image} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

const ProductImages = [];

export default function ApparelHome()
{
    const apparelHome = {
      Name: "drew house mascot ss tee burgundy",
      brand: "drew house",
      silhoutte: "drew house mascot",
      make: "drew house mascot",
      colorway: "burgundy",
      retailPrice: "$ 80.00",
      thumbnail: "https://images.stockx.com/images/drew-house-mascot-ss-tee-burgundy.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1663869959",
      releaseDate: "2022-09-22",
    };

    const patta = {
      Name: "Patta New Balance Family T-shirt Oil Green",
      brand: "Patta",
      silhoutte: "Patta New Balance Family",
      make: "Patta New Balance Family",
      colorway: "Oil Green",
      retailPrice: "$ 110.00",
      thumbnail: "https://images.stockx.com/images/Patta-New-Balance-Family-T-shirt-Oil-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1664578556",
      releaseDate: "2022-09-30",
    }

    const arc = {
      Name: "Arc'teryx x Beams Beta Jacket Dimensions",
      brand: "Arc'teryx",
      silhoutte: "Arc'teryx x Beams Beta",
      make: "Arc'teryx x Beams Beta",
      colorway: "Dimensions",
      retailPrice: "$ 415.00",
      thumbnail: "https://images.stockx.com/images/Arcteryx-x-Beams-Beta-Jacket-Dimensions.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1660118749",
      releaseDate: "2022-09-01",
    }

    const gallery = {
      Name: "Gallery Dept. x Lanvin Jogging Pants Multi (Collection 2)",
      brand: "Gallery Dept.",
      silhoutte: "Gallery Dept. x Lanvin Jogging",
      make: "Gallery Dept. x Lanvin Jogging",
      colorway: "Multi (Collection 2)",
      retailPrice: "$ 965.00",
      thumbnail: "https://images.stockx.com/images/Gallery-Dept-x-Lanvin-Jogging-Pants-Multi-Collection-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647620080",
      releaseDate: "2022-03-15",
    }

    const stoneIsland = {
      Name: "Stone Island 64120 Brushed Cotton Fleece Hoodie Sage",
      brand: "Stone Island",
      silhoutte: "Stone Island 64120 Brushed Cotton Fleece",
      make: "Stone Island 64120 Brushed Cotton Fleece",
      colorway: "Sage",
      retailPrice: "$ 283.00",
      thumbnail: "https://images.stockx.com/images/Stone-Island-64120-Brushed-Cotton-Fleece-Hoodie-Sage.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1639596961",
      releaseDate: "2022-09-01",
    }
    return (
        <Box>
        <Flex>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={apparelHome.thumbnail}/>
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
                 {apparelHome.brand} ; 
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {apparelHome.Name}
            </Box>
    
            <Box>
              {apparelHome.retailPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
              </Box>
            </Box>
          </Box>
        </Box>
        <Spacer/>
        
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={patta.thumbnail}/>
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
              {patta.brand} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {patta.Name}
          </Box>
  
          <Box>
            {patta.retailPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
        </Box>
        </Box>
        <Spacer/>
        
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={arc.thumbnail}/>
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
                 {arc.brand} 
            </Box>
            </Box>

            <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            >
            {arc.Name}
            </Box>

            <Box>
            {arc.retailPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
            </Box>
        </Box>
        </Box>
        <Spacer/>
       
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={gallery.thumbnail}/>
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
               {gallery.brand} ; 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {gallery.Name}
          </Box>
  
          <Box>
            {gallery.retailPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
        </Box>
      </Box>
      <Spacer/>
      
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={stoneIsland.thumbnail}/>
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
             {stoneIsland.brand} ; 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {stoneIsland.Name}
        </Box>

        <Box>
          {stoneIsland.retailPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>
      </Box>
    </Box>
    <Spacer/>
    </Flex>
    </Box>
      )
    }

