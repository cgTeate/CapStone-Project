import { Box, Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

const ProductImages = [];

export const getStaticProps = async () => {
  
} 
export default function AirJordan()
{
    const jordan4 = {
      shoeName: "Jordan 4 Retro SE Black Canvas",
      brand: "Jordan",
      colorway: "Black/Light Steel Grey/White/Fire Red",
      retailPrice: "$ 210.00",
      releaseDate: "2022-10-05",
      thumbnail: "https://images.stockx.com/images/Air-Jordan-4-Retro-SE-Black-Canvas-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1664433335",
    };

    const jordan3= {
      shoeName: "Jordan 3 Retro Fire Red (2022)",
      brand: "Jordan",
      colorway: "White/Fire Red/Cement Grey/Black",
      retailPrice: "$ 210.00",
      releaseDate: "2022-09-10",
      thumbnail:"https://images.stockx.com/images/Air-Jordan-3-Retro-Fire-Red-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1663687791",
    };

    const jordan1retro= {
      shoeName: "Jordan 1 Retro Low OG Black Dark Powder Blue",
      brand: "Jordan",
      colorway: "White/Dark Powder Blue/Black",
      retailPrice: "$ 130.00",
      releaseDate: "2022-07-29",
      thumbnail:"https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-UNC-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1659334953",
    };

    const pineGreen= {
        shoeName: "Air Jordan 1 Retro High OG Pine Green 2.0",
        brand: "Jordan",
        colorway: "Black/White-Gym Red-Pine Green",
        retailPrice: "$ 190.00",
        releaseDate: "2020-02-29",
        thumbnail:"https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pine-Green-Black/Images/Air-Jordan-1-Retro-High-Pine-Green-Black/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=5&amp;updated_at=1635269677",
      };

      const pollen= {
        shoeName: "Air Jordan 1 High Retro OG 'Pollen'",
        brand: "Jordan",
        colorway: "Pollen/Black/White",
        retailPrice: "$ 180.00",
        releaseDate: "2021-08-14",
        thumbnail:"https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=4&amp;updated_at=1635282407",
      };

      const travisScott= {
        shoeName: "Travis Scott x Air Jordan 1 Retro High OG 'Mocha'",
        brand: "Jordan",
        colorway: "Sail/Dark Mocha-University Red-Black",
        retailPrice: "$ 1,750.00",
        releaseDate: "2019-05-11",
        thumbnail:"https://images.stockx.com/360/Air-Jordan-1-Retro-High-Travis-Scott/Images/Air-Jordan-1-Retro-High-Travis-Scott/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=3&amp;updated_at=1635191289",
      };

    return (
        <Box>
        <Flex>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={jordan4.thumbnail}/>
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='graynp.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
               {jordan4.brand} 
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {jordan4.shoeName}
            </Box>
    
            <Box>
              {jordan4.retailPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
              </Box>
            </Box><button className="primary-button" type="button">
                Add to cart
              </button>
          </Box>
        </Box>
        <Spacer/>
        
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={jordan3.thumbnail}/>
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
               {jordan3.brand} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {jordan3.shoeName}
          </Box>
  
          <Box>
            {jordan3.retailPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
          <button className="primary-button" type="button">
                Add to cart
              </button>
        </Box>
        </Box>
        <Spacer/>
        
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={pineGreen.thumbnail}/>
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
              {pineGreen.brand} 
            </Box>
            </Box>

            <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            >
            {pineGreen.shoeName}
            </Box>

            <Box>
            {pineGreen.retailPrice}         
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
            </Box>
             <button className="primary-button" type="button">
                Add to cart
              </button>
        </Box>
        </Box>
        <Spacer/>
       
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={pollen.thumbnail}/>
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
               {pollen.brand} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {pollen.shoeName}
          </Box>
  
          <Box>
            {pollen.retailPrice}      
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
              <button className="primary-button" type="button">
                Add to cart
              </button>
        </Box>
      </Box>
      <Spacer/>
      
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={jordan1retro.thumbnail}/>
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
             {jordan1retro.brand} 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {jordan1retro.shoeName}
        </Box>

        <Box>
          {jordan1retro.retailPrice}
         
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>
             <button className="primary-button" type="button">
                Add to cart
              </button>
      </Box>
    </Box>
    <Spacer/>
    
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={travisScott.thumbnail}/>
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
           {travisScott.brand} 
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {travisScott.shoeName}
      </Box>

      <Box>
        {travisScott.retailPrice}
        <Box as='span' color='gray.600' fontSize='sm'>
        </Box>
      </Box>
        <button className="primary-button" type="button">
            Add to cart
        </button>
    </Box>
  </Box>
        </Flex>

        </Box>
      )
    }

