import React from 'react'
import Container from '../Container'
import PageHead from '../PageHead'
import Input from '../Input';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Container>
      <PageHead pageHead="404" className={"text-[100px]"} />
      <div className="w-1/2">
        <p>
          The page you were looking for couldn't be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>
        <Input
          inputType={"text"}
          placeHolder={"Type Your Search"}
          className={"block mb-10 mt-6 border py-5 px-3 w-full"}
        />
        <Link to={"/"}>
          <Button btnText={"Back To Home"} />
        </Link>
      </div>
    </Container>
  );
}

export default Error