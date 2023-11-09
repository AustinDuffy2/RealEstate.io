import React from "react";

import { Button, Img, Line, List, Text } from "components";
import ContactFooter3 from "components/ContactFooter3";
import Header from "components/Header";
import HomeHeader26 from "components/HomeHeader26";
import PropertiesCta13 from "components/PropertiesCta13";
import PropertiesLayout237 from "components/PropertiesLayout237";
import PropertiesPortfolio8 from "components/PropertiesPortfolio8";

const PropertiesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[180px] items-start justify-start mx-auto px-3 py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <PropertiesPortfolio8 className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
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
        <PropertiesLayout237 className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <HomeHeader26 className="flex md:flex-col flex-row font-robotocondensed gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <PropertiesCta13 className="flex flex-col font-robotocondensed gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <ContactFooter3 className="flex flex-col font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default PropertiesPage;
