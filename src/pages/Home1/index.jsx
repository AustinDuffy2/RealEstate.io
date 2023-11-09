import React from "react";

import { Button, Img, Line, List, Text } from "components";
import ContactFooter3 from "components/ContactFooter3";
import Header from "components/Header";
import HomeColumnfeaturedpropertOne from "components/HomeColumnfeaturedpropertOne";
import HomeColumnframe from "components/HomeColumnframe";
import HomeCta3 from "components/HomeCta3";
import HomeHeader26 from "components/HomeHeader26";
import HomeLayout1 from "components/HomeLayout1";
import HomeLayout219 from "components/HomeLayout219";
import HomeLayout228 from "components/HomeLayout228";
import HomeTestimonial4 from "components/HomeTestimonial4";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[180px] items-start justify-start mx-auto px-3 py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <HomeHeader26 className="flex md:flex-col flex-row font-robotocondensed gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <HomeColumnframe className="flex flex-col gap-[30px] items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <div className="flex flex-col font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-[9.6px] w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-[53px] w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <HomeColumnfeaturedpropertOne className="flex flex-col font-worksans gap-[30px] items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <HomeTestimonial4 className="flex flex-col font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <HomeLayout219 className="flex md:flex-col flex-row font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <HomeLayout228 className="flex flex-col font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-[9.6px] w-full" />
        <HomeLayout1 className="flex md:flex-col flex-row font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <HomeCta3 className="flex flex-col font-roboto gap-[30px] items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <ContactFooter3 className="flex flex-col font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
