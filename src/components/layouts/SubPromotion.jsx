import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'
import subPromoImg from "../../assets/subPromotion.png";
import Container from '../Container';
const SubPromotion = () => {
  return (
    <section className="mt-10">
      <Container>
        <Link to="/">
          <Image src={subPromoImg} className="w-full" />
        </Link>
      </Container>
    </section>
  );
}

export default SubPromotion