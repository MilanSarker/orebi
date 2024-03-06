import React from 'react'

import Banner from '../layouts/Banner'
import PromotionPart from "../layouts/PromotionPart";
import ProductPart from "../layouts/ProductPart";
import SubPromotion from '../layouts/SubPromotion';
import SpecialOffer from '../layouts/SpecialOffer';

const Home = () => {
  return (
    <>
      <Banner />
      <PromotionPart />
      <ProductPart />
      <SubPromotion/>
      <SpecialOffer/>
      

    </>
  );
}

export default Home