import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import List from "../List";
import Subheading from "../Subheading";
import Image from "../Image";
import Logo from '../../assets/bigLogo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="py-10 mt-10 bg-gray-200">
      <Container>
        <Flex>
          <div className="w-[15%]">
            <h1 className="text-2xl font-bold uppercase font-dm">Menu</h1>
            <ul>
              <Link to="/">
                <List menuName="Home" />
              </Link>
              <Link to="/">
                <List menuName="Shop" />
              </Link>
              <Link to="/">
                <List menuName="About" />
              </Link>
              <Link to="/">
                <List menuName="Contact" />
              </Link>
              <Link to="/">
                <List menuName="Journal" />
              </Link>
            </ul>
          </div>
          <div className="w-[15%]">
            <h1 className="text-2xl font-bold uppercase font-dm">Shop</h1>
            <ul>
              <Link to="/">
                <List menuName="Category 1" />
              </Link>
              <Link to="/">
                <List menuName="Category 2" />
              </Link>
              <Link to="/">
                <List menuName="Category 3" />
              </Link>
              <Link to="/">
                <List menuName="Category 4" />
              </Link>
              <Link to="/">
                <List menuName="Category 5" />
              </Link>
            </ul>
          </div>
          <div className="w-[15%]">
            <h1 className="text-2xl font-bold uppercase font-dm">Shop</h1>
            <ul>
              <Link to="/">
                <List menuName="Privacy Policy" />
              </Link>
              <Link to="/">
                <List menuName="Terms & Conditions" />
              </Link>
              <Link to="/">
                <List menuName="Special E-shop" />
              </Link>
              <Link to="/">
                <List menuName="Shipping" />
              </Link>
              <Link to="/">
                <List menuName="Secure Payments" />
              </Link>
            </ul>
          </div>
          <div className="w-[25%]">
            <h1 className="text-base font-bold font-dm">(052) 611-5711</h1>
            <h1 className="text-base font-bold font-dm">company@domain.com</h1>
            <Subheading
              className="mt-6"
              pText="575 Crescent Ave. Quakertown, PA 18951"
            />
          </div>
          <div className="w-[30%]">
            <Link to="/">
              <Image src={Logo} />
            </Link>
          </div>
        </Flex>
        <Flex className="mt-5">
          <div className="w-[70%]">
            <Flex className="gap-4">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </Flex>
          </div>
          <div className="w-[30%]">
            <Subheading pText="2020 Orebi Minimal eCommerce Figma Template by Adveits" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
