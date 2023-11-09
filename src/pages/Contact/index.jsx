import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import ContactContact27 from "components/ContactContact27";
import ContactContact4 from "components/ContactContact4";
import ContactFooter3 from "components/ContactFooter3";
import ContactTeam1 from "components/ContactTeam1";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[180px] items-start justify-start mx-auto px-3 py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <ContactContact27 className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <ContactTeam1 className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <ContactContact4 className="flex flex-col gap-12 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <ContactFooter3 className="flex flex-col gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
