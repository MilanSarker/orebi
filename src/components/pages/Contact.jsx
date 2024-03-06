import React from "react";
import Container from "../Container";
import PageHead from "../PageHead";
import Subheading from "../Subheading"
import Input from "../Input";
import Button from "../Button";

const Contact = () => {
  return (
    <Container>
      <PageHead pageHead="Contact" />
      <Subheading
        pText={"Fill up a Form"}
        className="text-[24px] text-bold mt-5"
      />
      <div className="w-1/2">
        <Subheading pText={"Name"} className="text-[14px] mt-5" />
        <Input
          inputType={"text"}
          placeHolder={"Your Name Here"}
          className={"border-b border-[#D8D8D8] w-full pb-4"}
        />
        <Subheading pText={"Email"} className="text-[14px] mt-5" />
        <Input
          inputType={"email"}
          placeHolder={"Your Email Here"}
          className={"border-b border-[#D8D8D8] w-full pb-4"}
        />
        <Subheading pText={"Message"} className="text-[14px] mt-5" />

        <textarea
          placeholder="Your Message Here"
          cols="30"
          className="w-full border-b border-[#D8D8D8]"
        ></textarea>
        <Button btnText={"Post"} className={"mt-5"} />
      </div>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58406.01969137746!2d90.3500855747055!3d23.80521685993307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1707890436152!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ width: "100%", height: "500" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contact;
