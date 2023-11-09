import React from "react";

import { Button, Img, Text } from "components";

const HomeColumnfeaturedpropertOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start py-[30px] w-full">
          <Text
            className="flex-1 sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
            size="txtRobotoCondensedBold40"
          >
            {props?.featuredpropertOne}
          </Text>
          <Button
            className="bg-transparent cursor-pointer flex flex-1 items-center justify-center w-full"
            rightIcon={
              <Img
                className="h-6 mb-px ml-[35px]"
                src="images/img_arrowright.svg"
                alt="arrow_right"
              />
            }
            size="xs"
          >
            <div className="font-bold font-roboto text-black-900 text-left text-xl">
              {props?.exploreAll}
            </div>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start py-5 w-full">
          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start py-[30px] w-full">
            <Button className="bg-transparent cursor-pointer font-bold font-worksans leading-[normal] min-w-[173px] text-black-900 text-center text-xl tracking-[-0.40px]">
              {props?.residentProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-bold font-worksans leading-[normal] min-w-[204px] text-black-900 text-center text-xl tracking-[-0.40px]">
              {props?.commercialProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-bold font-worksans leading-[normal] min-w-[181px] text-black-900 text-center text-xl tracking-[-0.40px]">
              {props?.industrialProperty}
            </Button>
            <Button className="bg-transparent cursor-pointer font-bold font-worksans leading-[normal] min-w-[197px] text-black-900 text-center text-xl tracking-[-0.40px]">
              {props?.agricultureProperty}
            </Button>
          </div>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
            <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image_260x300.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone1}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom1}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter1}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter1}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_20x20.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath1}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails1}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone2}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom2}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter2}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter2}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_1.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath2}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails2}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone3}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom3}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter3}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter3}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_2.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath3}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails3}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price3}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image_1.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone4}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom4}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter4}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter4}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_3.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath4}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails4}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price4}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image_2.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone5}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom5}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter5}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter5}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_4.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath5}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails5}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image_2.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone6}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p3bedroom6}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.bathcounter6}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.sqftcounter6}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_5.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath6}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails6}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price6}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="h-[260px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                src="images/img_image_3.png"
                alt="image"
              />
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[224px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoMedium20"
                    >
                      {props?.p286162ndaveoaklone7}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16Gray400"
                        >
                          {props?.p3bedroom7}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-end ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Text
                          className="text-base text-gray-400 w-auto"
                          size="txtRobotoLight16Gray400"
                        >
                          {props?.bathcounter7}
                        </Text>
                      </div>
                    </div>
                    <div className="flex relative w-full">
                      <div className="flex flex-1 flex-row gap-3 items-center justify-start ml-[undefinedpx] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="flex-1 text-base text-gray-400 w-auto"
                          size="txtRobotoLight16Gray400"
                        >
                          {props?.sqftcounter7}
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-center justify-center ml-[-44px] my-auto w-full z-[1]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_settings_6.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtRobotoLight16"
                        >
                          {props?.p1bath7}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-1 flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-4 rounded-[10px] w-full">
                      <Text
                        className="leading-[16.00px] max-w-[66px] md:max-w-full text-base text-center text-white-A700"
                        size="txtManropeSemiBold16"
                      >
                        {props?.viewdetails7}
                      </Text>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtManropeBold24"
                    >
                      {props?.price7}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumnfeaturedpropertOne.defaultProps = {
  featuredpropertOne: "Featured Properties",
  exploreAll: "Explore All",
  residentProperty: "Resident Property",
  commercialProperty: "Commercial Property",
  industrialProperty: "Industrial Property",
  agricultureProperty: "Agriculture Property",
  p286162ndaveoaklone: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom: "3 Bed Room",
  bathcounter: "1 Bath",
  sqftcounter: "1,032 sqft",
  p1bath: "Family",
  viewdetails: "View Details",
  price: "$649,900",
  p286162ndaveoaklone1: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom1: "3 Bed Room",
  bathcounter1: "1 Bath",
  sqftcounter1: "1,032 sqft",
  p1bath1: "Family",
  viewdetails1: "View Details",
  price1: "$649,900",
  p286162ndaveoaklone2: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom2: "3 Bed Room",
  bathcounter2: "1 Bath",
  sqftcounter2: "1,032 sqft",
  p1bath2: "Family",
  viewdetails2: "View Details",
  price2: "$649,900",
  p286162ndaveoaklone3: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom3: "3 Bed Room",
  bathcounter3: "1 Bath",
  sqftcounter3: "1,032 sqft",
  p1bath3: "Family",
  viewdetails3: "View Details",
  price3: "$649,900",
  p286162ndaveoaklone4: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom4: "3 Bed Room",
  bathcounter4: "1 Bath",
  sqftcounter4: "1,032 sqft",
  p1bath4: "Family",
  viewdetails4: "View Details",
  price4: "$649,900",
  p286162ndaveoaklone5: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom5: "3 Bed Room",
  bathcounter5: "1 Bath",
  sqftcounter5: "1,032 sqft",
  p1bath5: "Family",
  viewdetails5: "View Details",
  price5: "$649,900",
  p286162ndaveoaklone6: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom6: "3 Bed Room",
  bathcounter6: "1 Bath",
  sqftcounter6: "1,032 sqft",
  p1bath6: "Family",
  viewdetails6: "View Details",
  price6: "$649,900",
  p286162ndaveoaklone7: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom7: "3 Bed Room",
  bathcounter7: "1 Bath",
  sqftcounter7: "1,032 sqft",
  p1bath7: "Family",
  viewdetails7: "View Details",
  price7: "$649,900",
};

export default HomeColumnfeaturedpropertOne;
