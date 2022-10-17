import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputNumber from "../input-number/InputNumber";

export default {
  label: "label for input number",
  placeholder: "Placeholder",
  changeEvent: (num: number) => console.log(num),
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Number = Template.bind({});
Number.args = {
  label: "Label",
  placeholder: "Placeholder",
  changeEvent: (num: number) => console.log(num),
};
