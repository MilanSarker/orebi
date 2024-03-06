import React from "react";
import Container from "../Container";
import { FaAngleRight, FaMinus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import cardProductImg from "../../assets/cardProductimg.png";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

const Cart = () => {
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  return (
    <>
      <Container>
        <div>
          <h1 className="text-primaryColor font-dm font-bold text-[49px]">
            Cart
          </h1>
        </div>
        <div>
          <p className="flex items-center gap-x-1 ">
            <span className="commonStyle text-subHeading"> Home</span>
            <FaAngleRight className="commonStyle text-subHeading" />
            <span className="commonStyle text-subHeading">{currentPage}</span>
          </p>
        </div>

        <div className="flex ">
          <div className="w-[30%]">
            <div className="py-8 bg-[#F5F5F3]">
              <p className="font-dm font-bold text-base text-primaryColor">
                Product
              </p>
            </div>
            <div className=" flex items-center py-8  border-l-2 border-b-2 ">
              <span>
                <RxCross2 className="text-[#262626]  mr-8" />
              </span>
              <picture>
                <img src={cardProductImg} alt={cardProductImg} />
              </picture>

              <p className="ml-5">Product name</p>
            </div>
          </div>
          {/* 2nd one */}
          <div className="w-[30%]  border-b-2 ">
            <div className="py-8 bg-[#F5F5F3]">
              <p className="font-dm font-bold text-base text-primaryColor ">
                Product
              </p>
            </div>
            <div className=" flex items-center py-8">
              <p className="ml-5">$44.00</p>
            </div>
          </div>
          {/* 3rd one */}
          <div className="w-[30%]  border-b-2 ">
            <div className="py-8 bg-[#F5F5F3]">
              <p className="font-dm font-bold text-base text-primaryColor">
                Product
              </p>
            </div>
            <div className=" flex items-center  py-8">
              <div className="flex items-center gap-x-3">
                <FaPlus /> {1} <FaMinus />
              </div>
            </div>
          </div>
          {/* forth one */}
          <div className="w-[30%] ">
            <div className="py-8 bg-[#F5F5F3] ">
              <p className="font-dm font-bold text-base text-primaryColor">
                Product
              </p>
            </div>
            <div className=" flex items-center py-8 border-b-2 border-r-2">
              <p className="ml-5">$44.00</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
