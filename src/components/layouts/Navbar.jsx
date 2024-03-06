import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import List from "../List";
import Bars from "../Icons/Bars";
import { Link } from "react-router-dom";
import Subheading from "../Subheading";
import { IoSearch } from "react-icons/io5";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="py-8">
        <Container>
          <Flex>
            <div className="w-logoW">
              <Link to="/">
                <Image src={Logo} />
              </Link>
            </div>
            <div className="w-menuW">
              <ul className="flex gap-10">
                <Link to="/">
                  <List menuName="Home" />
                </Link>
                <Link to="/shop">
                  <List menuName="Shop" />
                </Link>
                <Link to="/about">
                  <List menuName="About" />
                </Link>
                <Link to="/contact">
                  <List menuName="Contact" />
                </Link>

                <List menuName="Journal" />
              </ul>
            </div>
          </Flex>
        </Container>
      </nav>
      <div className="py-10 border border-categoryBorder bg-categoryBg">
        <Container>
          <Flex>
            <div className="w-1/4 py-3">
              <Flex className="items-center gap-x-2">
                <Bars />
                <Subheading
                  className="text-sm text-primaryColor"
                  pText="Shop by Category"
                />
              </Flex>
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full px-5 py-4 rounded-lg "
              />
              <IoSearch className="absolute translate-y-[-50%] top-1/2 right-4" />
            </div>
            <div className="w-1/4 py-4">
              <Flex className="justify-end gap-6">
                <div className="flex">
                  <Link
                    // onClick={() => handleBreadcrumb("Sign Up")}
                    to="/sign-up"
                  >
                    <FaUser />
                  </Link>
                  <FaCaretDown />
                </div>
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
