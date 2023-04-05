import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex, FlexProps } from './flex';

export default {
    title: 'shared/stack/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args: FlexProps) => (
    <Flex {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    children: (
        <>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>first</div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>second</div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>third</div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>fourth</div>
        </>
    ),
};
