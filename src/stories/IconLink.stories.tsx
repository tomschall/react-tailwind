import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconLink } from 'src/components/IconLink';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Icons } from 'src/components/icons/IconMap';

export default {
  title: 'Interactions',
  component: IconLink,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    children: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      name: 'Icon',
    },
    handleClick: {
      action: () => 'handleClick',
    },
    iconColor: {
      table: {
        disable: true,
      },
    },
    iconWidth: {
      table: {
        disable: true,
      },
    },
    iconHeight: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => (
  <IconLink {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const IconLinkVariants = Template.bind({});

IconLinkVariants.args = {
  label: 'username',
  variant: 'slate',
  children: Icons.Mumble,
};

IconLinkVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

IconLinkVariants.storyName = 'Icon Link';