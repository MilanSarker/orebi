
import React from 'react'
import Image from "./Image";
import Badge from "./Badge";
import Flex from './Flex';
import Subheading from './Subheading';
import { FaHeart, FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const FourGridProduct = ({ heartText, compareText, cartText, prductImg, badgeText }) => {
  return (
    <div className="relative group">
      <Image src={prductImg} className="w-full" />
      <Badge badgeText={badgeText} className="absolute left-5 top-5" />
      <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
        <Flex className="items-center justify-end mt-3 gap-x-3">
          <p>{heartText}</p> <FaHeart />
        </Flex>
        <Flex className="items-center justify-end mt-3 gap-x-3">
          <p>{compareText}</p> <FaCodeCompare />
        </Flex>
        <Flex className="items-center justify-end mt-3 gap-x-3">
          <p>{cartText} </p> <FaShoppingCart />
        </Flex>
      </div>
      <Flex className="justify-between">
        <Subheading pText="Basic Crew Neck Tee" />
        <Subheading pText=" $44.00" />
      </Flex>
    </div>
  );
};

export default FourGridProduct