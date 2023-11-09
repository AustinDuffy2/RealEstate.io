import React from "react";

const sizeClasses = {
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoCondensedBold40Black900: "font-bold font-robotocondensed",
  txtWorkSansRegular13: "font-normal font-worksans",
  txtRobotoSemiBold20: "font-roboto font-semibold",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtManropeBold24: "font-bold font-manrope",
  txtRobotoCondensedBold48: "font-bold font-robotocondensed",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoCondensedBold56: "font-bold font-robotocondensed",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoLight16Gray400: "font-light font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoLight16: "font-light font-roboto",
  txtRobotoSemiBold16: "font-roboto font-semibold",
  txtRobotoSemiBold14: "font-roboto font-semibold",
  txtRobotoCondensedBold40: "font-bold font-robotocondensed",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
  txtRobotoRegular16Gray800: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
