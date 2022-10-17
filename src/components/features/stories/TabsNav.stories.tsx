import { ComponentStory, ComponentMeta } from "@storybook/react";
import TabsNav from "../tabs-nav/TabsNav";

export default {
  tabs: [
    {
      text: "First tab",
      value: "1",
      selected: true,
    },
    {
      text: "Second tab",
      value: "2",
      selected: false,
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
      text: "Active tab",
      value: "1",
      selected: true,
    },
    {
      text: "Second tab",
      value: "2",
      selected: false,
    },
    {
      text: "Disabled tab",
      value: "3",
      selected: false,
      disabled: true,
    },
  ],
  onChangeTab: (val: string) => {
    console.log(val);
  },
};
