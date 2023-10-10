import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";

type Frame123486CvpnewfeaturesProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "userheading"
  | "userbodytext1"
  | "userbodytext11"
  | "userbodytext12"
  | "body"
  | "userdescription"
  | "sixteen"
  | "usernextbutton"
> &
  Partial<{
    userimage: string;
    userheading: string;
    userbodytext1: string;
    userbodytext11: string;
    userbodytext12: string;
    body: string;
    userdescription: string;
    sixteen: string;
    usernextbutton: string;
  }>;

const Frame123486Cvpnewfeatures: React.FC<Frame123486CvpnewfeaturesProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start pr-4 pt-6 w-[570px] sm:w-full">
            <div className="h-[556px] relative w-full">
              <Img
                className="h-[556px] m-auto object-cover w-full"
                alt="accountsTwo"
                src={props?.userimage}
              />
              <div className="absolute bg-gradient2  bottom-[0] h-[119px] inset-x-[0] mx-auto w-full"></div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start pb-[188px] w-[36%] md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 w-80">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[28.00px] max-w-[256px] md:max-w-full text-gray-800 text-xl"
                      size="txtOpenSansBold20Gray800"
                    >
                      {props?.userheading}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pb-6 sm:px-5 px-8 w-80">
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Line className="bg-gray-600 h-[18px] rounded-[1px] w-0.5" />
                    <Text
                      className="flex-1 text-gray-600 text-sm w-auto"
                      size="txtOpenSansBold14"
                    >
                      {props?.userbodytext12}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pb-6 sm:px-5 px-8 w-80">
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Line className="bg-gray-600 h-[18px] rounded-[1px] w-0.5" />
                    <Text
                      className="flex-1 text-gray-600 text-sm w-auto"
                      size="txtOpenSansBold14"
                    >
                      {props?.userbodytext12}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pb-6 sm:px-5 px-8 w-80">
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Line className="bg-gray-600 h-[18px] rounded-[1px] w-0.5" />
                    <Text
                      className="flex-1 text-gray-600 text-sm w-auto"
                      size="txtOpenSansBold14"
                    >
                      {props?.userbodytext12}
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-2 items-start justify-start pb-6 sm:px-5 px-8 w-80">
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                  <Line className="bg-gray-800 h-[18px] rounded-[1px] w-0.5" />
                  <Text
                    className="flex-1 text-gray-800 text-sm w-auto"
                    size="txtOpenSansBold14Gray800"
                  >
                    {props?.body}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start px-2 w-full">
                  <Text
                    className="leading-[21.00px] max-w-[240px] md:max-w-full text-gray-700 text-sm"
                    size="txtOpenSansRegular14"
                  >
                    {props?.userdescription}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-row gap-4 items-center justify-between p-6 sm:px-5 w-full">
          <CheckBox
            className="!text-gray-700 font-opensans text-left text-sm"
            inputClassName="h-4 mr-[5px] w-4"
            name="option"
            id="option"
            label="Don’t show this again"
            shape="round"
            color="blue_gray_200"
            size="xs"
            variant="outline"
          ></CheckBox>
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Text
              className="text-center text-gray-600 text-sm w-auto"
              size="txtOpenSansSemiBold14"
            >
              {props?.sixteen}
            </Text>
            <Button
              className="!text-white-A700 cursor-pointer font-opensans font-semibold text-center text-sm w-20"
              shape="round"
              size="xs"
              variant="gradient"
              color="blue_gray_700_blue_gray_600"
            >
              {props?.usernextbutton}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Frame123486Cvpnewfeatures.defaultProps = {
  userimage: "images/img_accounts2_556x570.png",
  userheading: "We’ve made some updates!",
  userbodytext1: "Search transactions",
  userbodytext11: "Search transactions",
  userbodytext12: "Search transactions",
  body: "SWIFT tracking & Remittance",
  userdescription:
    "Track your incoming and outgoing payments. You can now find Remittance Inquiry & SWIFT UETR Tracking under Transactions.",
  sixteen: "2/4",
  usernextbutton: "Next",
};

export default Frame123486Cvpnewfeatures;
