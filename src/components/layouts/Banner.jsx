import React from 'react'
import Image from "../Image";
import BannerOne from "../../assets/Banner_image.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section>
      <Link to="/">
        <Image className="w-full" src={BannerOne} />
      </Link>
    </section>
  );
}

export default Banner