import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Frame123486Cvpnewfeatures from "components/Frame123486Cvpnewfeatures";
import Frame123486Header from "components/Frame123486Header";

const Frame123487Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-opensans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center w-full">
          <Frame123486Header className="flex flex-col h-[104px] md:h-auto items-start justify-start max-w-[1440px] w-full" />
        </div>
        <div className="flex flex-col items-start justify-start md:px-5 px-[156px] w-auto md:w-full">
          <Frame123486Cvpnewfeatures className="flex flex-col items-center justify-center rounded w-auto md:w-full" />
        </div>
        <div className="flex flex-col items-center w-full">
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col h-[184px] md:h-auto items-end justify-center max-w-[1440px] md:px-10 sm:px-5 px-[156px] py-6 w-full">
              <Button
                className="cursor-pointer font-semibold text-base text-center w-[196px]"
                shape="round"
                size="sm"
                variant="gradient"
                color="blue_gray_800_01_blue_gray_600"
              >
                Next
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Frame123487Page;
