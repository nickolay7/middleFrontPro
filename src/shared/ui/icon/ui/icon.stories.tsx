import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import Calendar from 'shared/assets/icons/calendar-20-20.svg';
import { StrokeColor, Icon, IconProps } from './icon';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => (
    <Icon {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    stroke: StrokeColor.PRIMARY,
    Svg: Calendar,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    stroke: StrokeColor.PRIMARY,
    Svg: Calendar,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
