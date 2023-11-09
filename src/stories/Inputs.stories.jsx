import React from "react";

import { Input } from "components";

export default {
  title: "realestateio/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder20",
  variant: "Black",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
