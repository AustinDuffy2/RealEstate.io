import React from "react";

import { Button, Img, Line, List, Text } from "components";
import ContactFooter3 from "components/ContactFooter3";
import Header from "components/Header";
import PropertiesPortfolio8 from "components/PropertiesPortfolio8";
import PropertyDetailsColumnheadingTwo from "components/PropertyDetailsColumnheadingTwo";
import PropertyDetailsContent2 from "components/PropertyDetailsContent2";
import PropertyDetailsCta7 from "components/PropertyDetailsCta7";
import PropertyDetailsFaq1 from "components/PropertyDetailsFaq1";
import PropertyDetailsLayout22 from "components/PropertyDetailsLayout22";

const PropertyDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[180px] items-start justify-start mx-auto px-3 py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <PropertyDetailsLayout22 className="flex md:flex-col flex-row gap-2.5 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
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
        <PropertyDetailsColumnheadingTwo className="flex flex-col gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <PropertyDetailsContent2 className="flex md:flex-col flex-row font-robotocondensed gap-[30px] items-start justify-center max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <PropertyDetailsCta7 className="flex flex-col font-roboto gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <PropertiesPortfolio8 className="flex flex-col font-roboto md:gap-10 gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <PropertyDetailsFaq1 className="flex flex-col font-roboto gap-20 items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <ContactFooter3 className="flex flex-col font-roboto gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
