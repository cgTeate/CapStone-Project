import { Box, Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

const ProductImages = [];

export const getStaticProps = async () => {
  
} 
export default function kicksHome()
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

    const nikeCraft= {
      shoeName: "NikeCraft General Purpose Shoe Tom Sachs Archive Dark Sulfur",
      brand: "Nike",
      colorway: "Dark Sulfur/White-Light Cream",
      retailPrice: "$ 110.00",
      releaseDate: "2022-09-02",
      thumbnail:"https://images.stockx.com/images/NikeCraft-General-Purpose-Shoe-Tom-Sachs-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1662558895",
    };

    const crocPollex= {
      shoeName: "Crocs Pollex Clog by Salehe Bembury Tide",
      brand: "Crocs",
      colorway: "Turquoise Tonic",
      retailPrice: "$ 85.00",
      releaseDate: "2022-09-22",
      thumbnail:"https://images.stockx.com/images/Crocs-Pollex-Clog-by-Salehe-Bembury-Tide-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1664259289",
    };

    const jordan1retro= {
      shoeName: "Jordan 1 Retro Low OG Black Dark Powder Blue",
      brand: "Jordan",
      colorway: "White/Dark Powder Blue/Black",
      retailPrice: "$ 130.00",
      releaseDate: "2022-07-29",
      thumbnail:"https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-UNC-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1659334953",
    };

    const yeezy350 = {
      shoeName: "adidas Yeezy Boost 350 V2 Flax",
      brand: "adidas",
      colorway: "Flax/Flax/Flax",
      retailPrice: "$ 220.00",
      releaseDate: "2020-02-22",
      thumbnail:"https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Flax-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657197541",
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
              <button className="primary-button" type="button">
                Add to cart
              </button>
              <Box as='span' color='gray.600' fontSize='sm'>
              </Box>
            </Box>
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
        <Image src={nikeCraft.thumbnail}/>
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
              {nikeCraft.brand} 
            </Box>
            </Box>

            <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            >
            {nikeCraft.shoeName}
            </Box>

            <Box>
            {nikeCraft.retailPrice}         
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
        <Image src={crocPollex.thumbnail}/>
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
               {crocPollex.brand} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {crocPollex.shoeName}
          </Box>
  
          <Box>
            {crocPollex.retailPrice}      
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
    <Image src={yeezy350.thumbnail}/>
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
           {yeezy350.brand} 
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {yeezy350.shoeName}
      </Box>

      <Box>
        {yeezy350.retailPrice}
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

