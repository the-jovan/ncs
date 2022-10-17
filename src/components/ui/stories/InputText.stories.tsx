import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputText from "../input-text/InputText";

export default {
  label: "label for input text",
  placeholder: "Placeholder",
  changeEvent: (text: string) => console.log(text),
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Text = Template.bind({});
Text.args = {
  label: "Label",
  placeholder: "Placeholder",
  changeEvent: (text: string) => console.log(text),
};
