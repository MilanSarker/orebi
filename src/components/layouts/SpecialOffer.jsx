import React from 'react'
import FourGridProduct from '../FourGridProduct'
import Container from '../Container'
import secProdcutImg from '../../assets/clock.png'
import Flex from '../Flex'

const SpecialOffer = () => {
  return (
    <section className='my-10'>
      <Container>
        <Flex className='gap-5'>
            <FourGridProduct prductImg={secProdcutImg} badgeText='New' heartText='Add To Wish List' compareText='Compare' cartText='Add To Cart'/>
            <FourGridProduct prductImg={secProdcutImg} badgeText='New' heartText='Add To Wish List' compareText='Compare' cartText='Add To Cart'/>
            <FourGridProduct prductImg={secProdcutImg} badgeText='New' heartText='Add To Wish List' compareText='Compare' cartText='Add To Cart'/>
            <FourGridProduct prductImg={secProdcutImg} badgeText='New' heartText='Add To Wish List' compareText='Compare' cartText='Add To Cart'/>
         
        </Flex>
      </Container>
    </section>
  );
}

export default SpecialOffer