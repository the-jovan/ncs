import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../button/Button";

export default {
  label: "Example",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary button",
  secondary: true,
};
