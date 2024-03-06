import React from 'react'
import PageHead from '../PageHead'
import Container from '../Container'
import Flex from "../Flex";
import Image from "../Image";
import Subheading from "../Subheading";
import { Link } from 'react-router-dom';
import OurBrand from "../../assets/ourbrands.png";

const About = () => {
  return (
    <Container>
      <PageHead pageHead="About" />
      <Flex className="gap-5 mt-10">
        <div className="w-1/2">
          <Link to="/">
            <Image src={OurBrand} className="w-full" />
          </Link>
        </div>
        <div className="w-1/2">
          <Link to="/">
            <Image src={OurBrand} className="w-full" />
          </Link>
        </div>
      </Flex>
      <Subheading
        className="text-[37px] leading-10 pt-7"
        pText="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
      />
      <Flex>
        <div className="w-[33%] mt-10">
          <Subheading pText="Our Vision" className="text-3xl font-bold" />
          <Subheading pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
        <div className="w-[33%] mt-10">
          <Subheading pText="Our Vision" className="text-3xl font-bold" />
          <Subheading pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
        <div className="w-[33%] mt-10">
          <Subheading pText="Our Vision" className="text-3xl font-bold" />
          <Subheading pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
      </Flex>
    </Container>
  );
}

export default About