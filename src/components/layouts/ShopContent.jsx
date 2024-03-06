import React from 'react'
import PageHead from '../PageHead'
import Container from '../Container'
import Flex from '../Flex';
import Subheading from '../Subheading';
import { FaPlus } from "react-icons/fa";
import GridOne from "../Icons/GridOne"
import GridTwo from "../Icons/GridTwo";
import FourGridProduct from '../FourGridProduct';
import ProductImg from '../../assets/clock.png'


const ShopContent = () => {
  return (
    <section>
      <Container>
        <PageHead pageHead="Products" />
        <Flex>
          <div className="w-[25%]">
            <div className="pb-4 border-b-2 border-red-500">
              <PageHead
                className="text-[16px] my-5 "
                pageHead="Shop by Category"
              />

              <Flex className="items-center justify-between">
                <Subheading pText="Category 1" />
                <FaPlus />
              </Flex>
            </div>
            <div className="pb-4 border-b-2 border-red-500">
              <PageHead
                className="text-[16px] mt-5 "
                pageHead="Shop by Category"
              />

              <Flex className="items-center justify-between">
                <Subheading pText="Category 1" />
                <FaPlus />
              </Flex>
            </div>
            <div className="pb-4 border-b-2 border-red-500">
              <PageHead
                className="text-[16px] mt-5 "
                pageHead="Shop by Category"
              />

              <Flex className="items-center justify-between">
                <Subheading pText="Category 1" />
                <FaPlus />
              </Flex>
            </div>
            <div className="pb-4 border-b-2 border-red-500">
              <PageHead
                className="text-[16px] mt-5 "
                pageHead="Shop by Category"
              />

              <Flex className="items-center justify-between">
                <Subheading pText="Category 1" />
                <FaPlus />
              </Flex>
            </div>
            <div className="pb-4 border-b-2 border-red-500">
              <PageHead
                className="text-[16px] mt-5 "
                pageHead="Shop by Category"
              />

              <Flex className="items-center justify-between">
                <Subheading pText="Category 1" />
                <FaPlus />
              </Flex>
            </div>
            <div className="pb-4 border-b-2 border-red-500">
              <PageHead
                className="text-[16px] mt-5 "
                pageHead="Shop by Category"
              />

              <Flex className="items-center justify-between">
                <Subheading pText="Category 1" />
                <FaPlus />
              </Flex>
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex justify-between">
              <Flex className="gap-4">
                <GridOne />
                <GridTwo />
              </Flex>
              <Flex className="items-center gap-3">
                <Subheading pText="Short By:" />
                <select className="px-5 py-2 border-2 border-gray-500 w-[200px] rounded-md font-dm ">
                  <option value="" className="pl-5">
                    Featured
                  </option>
                  <option value="">30</option>
                  <option value="">30</option>
                </select>
                <Subheading pText="Show:" />
                <select className="px-5 py-2 border-2 border-gray-500 w-[150px] rounded-md font-dm ">
                  <option value="" className="pl-5">
                    30
                  </option>
                  <option value="">30</option>
                  <option value="">30</option>
                </select>
              </Flex>
            </div>
            <Flex className="flex-wrap justify-between mt-10 gap-x-7 ">
              <div className="w-[30%] ml-4">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%]">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%]">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] ml-4 mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] ml-4 mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] ml-4 mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
              <div className="w-[30%] mt-10">
                <FourGridProduct
                  prductImg={ProductImg}
                  className="w-full"
                  badgeText="New"
                  cartText="Add To Cart"
                  compareText="Compare"
                  heartText="Add to Wish List"
                />
              </div>
     
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default ShopContent