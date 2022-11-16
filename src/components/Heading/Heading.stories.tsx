import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

export default {
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading1 = { ...Template };

Heading1.args = {
  level: 1,
  children: "Hello!",
};

export const Heading2 = { ...Template };

Heading2.args = {
  level: 4,
  children: "Goodbye",
};
