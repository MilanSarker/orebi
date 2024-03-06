import React from "react";
import Image from "./Image";
import Clock from "../assets/clock.png";
import Badge from "./Badge";
import Flex from "./Flex";
import Subheading from "./Subheading";
import { FaHeart, FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "./Icons/PrevArrow";
import NextArrow from "./Icons/NextArrow";

const Product = ({ className }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <section className="mt-10">
      <Container>
        <Subheading
          pText="New Arrivals"
          className="mb-3 text-4xl font-bold font-dm"
        />
        <Slider {...settings}>
          <div className="relative group">
            <div className={`ml-5 ${className}`}>
              <Image src={Clock} className="w-full" />
              <Badge badgeText="New" className="absolute left-5 top-5" />
              <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Wish List </p> <FaHeart />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Compare</p> <FaCodeCompare />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Cart </p> <FaShoppingCart />
                </Flex>
              </div>
              <Flex className="justify-between">
                <Subheading pText="Basic Crew Neck Tee" />
                <Subheading pText=" $44.00" />
              </Flex>
            </div>
          </div>
          <div className="relative group">
            <div className={`ml-5 ${className}`}>
              <Image src={Clock} className="w-full" />
              <Badge badgeText="New" className="absolute left-5 top-5" />
              <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Wish List </p> <FaHeart />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Compare</p> <FaCodeCompare />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Cart </p> <FaShoppingCart />
                </Flex>
              </div>
              <Flex className="justify-between">
                <Subheading pText="Basic Crew Neck Tee" />
                <Subheading pText=" $44.00" />
              </Flex>
            </div>
          </div>
          <div className="relative group">
            <div className={`ml-5 ${className}`}>
              <Image src={Clock} className="w-full" />
              <Badge badgeText="New" className="absolute left-5 top-5" />
              <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Wish List </p> <FaHeart />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Compare</p> <FaCodeCompare />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Cart </p> <FaShoppingCart />
                </Flex>
              </div>
              <Flex className="justify-between">
                <Subheading pText="Basic Crew Neck Tee" />
                <Subheading pText=" $44.00" />
              </Flex>
            </div>
          </div>
          <div className="relative group">
            <div className={`ml-5 ${className}`}>
              <Image src={Clock} className="w-full" />
              <Badge badgeText="New" className="absolute left-5 top-5" />
              <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Wish List </p> <FaHeart />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Compare</p> <FaCodeCompare />
                </Flex>
                <Flex className="items-center justify-end mt-3 gap-x-3">
                  <p>Add to Cart </p> <FaShoppingCart />
                </Flex>
              </div>
              <Flex className="justify-between">
                <Subheading pText="Basic Crew Neck Tee" />
                <Subheading pText=" $44.00" />
              </Flex>
            </div>
          </div>
        </Slider>

        <Subheading
          pText="Our Bestsellers"
          className="mt-10 mb-3 text-4xl font-bold font-dm"
        />
        <Flex className="gap-6">
          <div className="relative w-1/4 group">
            <Image src={Clock} className="w-full" />
            <Badge badgeText="New" className="absolute left-5 top-5" />
            <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Wish List </p> <FaHeart />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Compare</p> <FaCodeCompare />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Cart </p> <FaShoppingCart />
              </Flex>
            </div>
            <Flex className="justify-between">
              <Subheading pText="Basic Crew Neck Tee" />
              <Subheading pText=" $44.00" />
            </Flex>
          </div>
          <div className="relative w-1/4 group">
            <Image src={Clock} className="w-full" />
            <Badge badgeText="New" className="absolute left-5 top-5" />
            <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Wish List </p> <FaHeart />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Compare</p> <FaCodeCompare />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Cart </p> <FaShoppingCart />
              </Flex>
            </div>
            <Flex className="justify-between">
              <Subheading pText="Basic Crew Neck Tee" />
              <Subheading pText=" $44.00" />
            </Flex>
          </div>
          <div className="relative w-1/4 group">
            <Image src={Clock} className="w-full" />
            <Badge badgeText="New" className="absolute left-5 top-5" />
            <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Wish List </p> <FaHeart />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Compare</p> <FaCodeCompare />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Cart </p> <FaShoppingCart />
              </Flex>
            </div>
            <Flex className="justify-between">
              <Subheading pText="Basic Crew Neck Tee" />
              <Subheading pText=" $44.00" />
            </Flex>
          </div>
          <div className="relative w-1/4 group">
            <Image src={Clock} className="w-full" />
            <Badge badgeText="New" className="absolute left-5 top-5" />
            <div className="absolute left-0 invisible w-full p-4 bg-white bottom-5 group-hover:visible ">
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Wish List </p> <FaHeart />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Compare</p> <FaCodeCompare />
              </Flex>
              <Flex className="items-center justify-end mt-3 gap-x-3">
                <p>Add to Cart </p> <FaShoppingCart />
              </Flex>
            </div>
            <Flex className="justify-between">
              <Subheading pText="Basic Crew Neck Tee" />
              <Subheading pText=" $44.00" />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Product;
