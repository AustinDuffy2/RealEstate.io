import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import AboutUsLayout4 from "components/AboutUsLayout4";
import AboutUsTeam8 from "components/AboutUsTeam8";
import ContactFooter3 from "components/ContactFooter3";
import Header from "components/Header";
import HomeLayout228 from "components/HomeLayout228";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[180px] items-start justify-start mx-auto px-3 py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <AboutUsLayout4 className="flex md:flex-col flex-row gap-[30px] h-[672px] md:h-auto items-start justify-center max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <div className="flex flex-col gap-[31.24px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts1 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-14 w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <HomeLayout228 className="flex flex-col gap-[31.24px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <AboutUsContact15 className="flex md:flex-col flex-row gap-[30px] items-start justify-center max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <AboutUsTeam8 className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <div className="flex flex-col gap-6 items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32"
            >
              Join Us!
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              Exciting opportunities to be part of our team
            </Text>
          </div>
          <Button
            className="cursor-pointer h-12 text-base text-center w-[155px]"
            shape="round"
            color="light_blue_500_7f"
            size="lg"
            variant="fill"
          >
            Button
          </Button>
        </div>
        <ContactFooter3 className="flex flex-col gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
