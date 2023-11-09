import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import ContactFooter3 from "components/ContactFooter3";
import Header from "components/Header";
import SearchCta45 from "components/SearchCta45";

const SearchPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[180px] items-start justify-start mx-auto px-3 py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col gap-[30px] items-center justify-center px-3 md:px-5 py-2.5 w-full" />
        <AIPlatformLayout121 className="flex flex-col gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
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
        <AIPlatformLayout27 className="flex flex-col gap-20 items-start justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <SearchCta45 className="flex flex-col gap-20 items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
        <ContactFooter3 className="flex flex-col gap-[30px] items-center justify-start max-w-[1416px] mx-auto md:px-5 py-2.5 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
