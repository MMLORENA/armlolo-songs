import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonBase = { ...Template };

ButtonBase.args = {
  text: "Send Song",
  disabled: false,
};

export const ButtonDisabled = { ...Template };

ButtonDisabled.args = {
  text: "Send Song",
  disabled: true,
};

export const ButtonCross = { ...Template };

ButtonCross.args = {
  disabled: false,
};
