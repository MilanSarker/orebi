import React from 'react'
import Container from '../../components/Container'
import Flex from "../Flex";
import Image from '../Image';
import PromoOne from "../../assets/ad_one.png";
import PromoTwo from "../../assets/ad_two.png";
import PromoThree from "../../assets/ad_three.png";
import { Link } from 'react-router-dom';

const PromotionPart = () => {
  return (
    <section className='mt-10'>
      <Container>
        <Flex className='gap-x-4'>
          <div className="w-1/2">
            <Link to="/">
              <Image src={PromoOne} className="w-full " />
            </Link>
          </div>
          <div className="w-1/2">
            <Link to="/">
              <Image src={PromoTwo} className="w-full mb-10" />
            </Link>
            <Link to="/">
              <Image src={PromoThree} className="w-full" />
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default PromotionPart