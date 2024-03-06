import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import HeadPhone from "../../assets/headphon.png";
import Subheading from '../Subheading';
import { FaStar } from "react-icons/fa6";
import Input from '../Input';
import Color from '../Color';

const ProductDetails = () => {
  return (
    <section className="mt-10">
      <Container>
        <Flex className={"gap-x-5"}>
          <div className="w-1/2">
            <Image src={HeadPhone} className={"w-full"} />
          </div>
          <div className="w-1/2">
            <Image src={HeadPhone} className={"w-full"} />
          </div>
        </Flex>
        <Flex className={"gap-x-5 mt-5"}>
          <div className="w-1/2">
            <Image src={HeadPhone} className={"w-full"} />
          </div>
          <div className="w-1/2">
            <Image src={HeadPhone} className={"w-full"} />
          </div>
        </Flex>

        <Subheading pText={"Product"} className={"mt-5 text-[40px]"} />
        <Flex className={"items-center gap-x-3"}>
          <div className="">
            <Flex className={"mt-5 gap-x-2"}>
              <FaStar className="text-yellow-500 text-[30px]" />
              <FaStar className="text-yellow-500 text-[30px]" />
              <FaStar className="text-yellow-500 text-[30px]" />
              <FaStar className="text-yellow-500 text-[30px]" />
              <FaStar className="text-yellow-500 text-[30px]" />
            </Flex>
          </div>
          <Subheading pText={"1 Review"} className="text-[30px] mt-5" />
        </Flex>
        <Flex className={"mt-5"}>
          <h3 className="text-[20px] mr-4">
            <s>$420</s>
          </h3>
          <h3 className="text-[20px]">$320</h3>
        </Flex>
        <Flex className={"gap-x-3 mt-5 items-center"}>
          <Subheading pText={"Color:"} className={"text-[20px]"} />
          <Color className={"bg-red-500"} />
          <Color className={"bg-teal-500"} />
          <Color className={"bg-yellow-500"} />
        </Flex>
        <Flex className={'items-center '}>
          <Subheading pText={"Size:"} className="text-[30px] mt-5" />
          <select className='py-3 border-2 border-red-500 px-7 w-[150px] mt-5 ml-5 rounded-lg'>
            <option value="">S</option>
            <option value="">L</option>
            <option value="">M</option>
            <option value="">XL</option>
            <option value="">2XL</option>
            <option value="">3XL</option>
          </select>
        </Flex>
      </Container>
    </section>
  );
}

export default ProductDetails
