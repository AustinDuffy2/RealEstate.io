import React from "react";

import { Button, Text } from "components";

const HomeCta3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
          <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingFive}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.textTwo}
            </Text>
          </div>
          <div className="flex flex-row gap-[15.37px] items-center justify-center pt-[15.37px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[99px] outline outline-[1px] outline-white-A700 rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.signuplabel}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[124px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.learnmorelabel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomeCta3.defaultProps = {
  headingFive: "Discover Your Dream Properties",
  textTwo:
    "Find the perfect commercial real estate, multi-family, industrial sites, and rental properties worldwide.",
  signuplabel: "Sign Up",
  learnmorelabel: "Learn More",
};

export default HomeCta3;
