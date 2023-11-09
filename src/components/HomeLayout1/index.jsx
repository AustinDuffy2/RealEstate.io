import React from "react";

import { Button, Img, Text } from "components";

const HomeLayout1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col items-center justify-center w-full">
          <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
            <div className="flex flex-col gap-[15.37px] items-center justify-start w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheading}
              </Text>
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[120.00%] max-w-[681px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.headingfour}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[681px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtRobotoRegular18"
                >
                  {props?.descriptionfive}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-center pt-[15.37px] w-full">
              <Button
                className="cursor-pointer font-roboto h-[42px] min-w-[124px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="md"
                variant="fill"
              >
                {props?.learnmore}
              </Button>
              <div className="flex flex-row gap-[7.68px] items-center justify-center rounded-[9px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.signup}
                </Text>
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start p-[9.22px] w-full">
          <Img
            className="h-[597px] md:h-auto object-cover rounded-[9px] w-full"
            src="images/img_frame3.png"
            alt="frameThree_Two"
          />
        </div>
      </div>
    </>
  );
};

HomeLayout1.defaultProps = {
  subheading: "Discover",
  headingfour: "Unleash the Power of AI in Real Estate",
  descriptionfive:
    "Experience the speed, accuracy, and global reach of our AI platform for real estate data. Find commercial real estate, multi-family properties, industrial sites, and rental properties around the world with ease.",
  learnmore: "Learn More",
  signup: "Sign Up",
};

export default HomeLayout1;
