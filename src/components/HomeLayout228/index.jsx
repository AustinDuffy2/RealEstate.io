import React from "react";

import { Button, Img, List, Text } from "components";

const HomeLayout228 = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-[46.1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="border border-light_blue-500_3f border-solid flex flex-1 flex-col gap-[30px] h-[452px] md:h-auto items-center justify-between p-2.5 rounded-[20px] shadow-bs2 w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[413px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[413px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-start pt-[15.37px] w-auto">
              <Button
                className="cursor-pointer font-roboto h-[42px] min-w-[92px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="md"
                variant="fill"
              >
                {props?.buttonlabel}
              </Button>
              <div className="flex flex-row gap-[7.68px] items-center justify-center rounded-[9px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.buttontext}
                </Text>
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
          <div className="border border-light_blue-500_3f border-solid flex flex-1 flex-col gap-[30px] h-[452px] md:h-auto items-center justify-between p-2.5 rounded-[20px] shadow-bs2 w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[413px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading1}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[413px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription1}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-start pt-[15.37px] w-auto">
              <Button
                className="cursor-pointer font-roboto h-[42px] min-w-[92px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="md"
                variant="fill"
              >
                {props?.buttonlabel1}
              </Button>
              <div className="flex flex-row gap-[7.68px] items-center justify-center rounded-[9px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.buttontext1}
                </Text>
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
          <div className="border border-light_blue-500_3f border-solid flex flex-1 flex-col gap-[30px] h-[452px] md:h-auto items-center justify-between p-2.5 rounded-[20px] shadow-bs2 w-full">
            <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-[23.05px] items-center justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[413px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32"
                >
                  {props?.sectionheading2}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[413px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.sectiondescription2}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[23.05px] items-center justify-start pt-[15.37px] w-auto">
              <Button
                className="cursor-pointer font-roboto h-[42px] min-w-[92px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="md"
                variant="fill"
              >
                {props?.buttonlabel2}
              </Button>
              <div className="flex flex-row gap-[7.68px] items-center justify-center rounded-[9px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.buttontext2}
                </Text>
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HomeLayout228.defaultProps = {
  sectionheading: "Medium length section heading goes here",
  sectiondescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttonlabel: "Button",
  buttontext: "Button",
  sectionheading1: "Medium length section heading goes here",
  sectiondescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttonlabel1: "Button",
  buttontext1: "Button",
  sectionheading2: "Medium length section heading goes here",
  sectiondescription2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttonlabel2: "Button",
  buttontext2: "Button",
};

export default HomeLayout228;
