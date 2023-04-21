import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Overlay, OverlayProps } from './overlay';
import { VStack } from '../../stack';

export default {
    title: 'shared/Overlay',
    component: Overlay,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args: OverlayProps) => (
    <Overlay {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    children: (
        <VStack>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>some element</div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>some element</div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>some element</div>
        </VStack>
    ),
};
