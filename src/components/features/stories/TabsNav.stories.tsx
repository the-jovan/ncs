import { ComponentStory, ComponentMeta } from "@storybook/react";
import TabsNav from "../tabs-nav/TabsNav";

export default {
  tabs: [
    {
      text: "First tab",
      value: "1",
      active: true,
    },
    {
      text: "Second tab",
      value: "2",
      active: false,
    },
  ],
  onChangeTab: (val: string) => {
    console.log(val);
  },
} as ComponentMeta<typeof TabsNav>;

const Template: ComponentStory<typeof TabsNav> = (args) => (
  <TabsNav {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  tabs: [
    {
      text: "Active",
      value: "1",
      active: true,
    },
    {
      text: "Second",
      value: "2",
      active: false,
    },
    {
      text: "Disabled",
      value: "3",
      active: false,
      disabled: true,
    },
    {
      text: "Fourth",
      value: "4",
      active: false,
    },
  ],
  onChangeTab: (val: string) => {
    console.log(val);
  },
};
