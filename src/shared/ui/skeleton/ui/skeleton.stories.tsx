import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { Skeleton, SkeletonProps } from './skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args: SkeletonProps) => (
    <Skeleton {...args} />
);

export const Rectangle = Template.bind({});
Rectangle.args = {
    className: '',
    width: 600,
    height: 200,
};

export const Round = Template.bind({});
Round.args = {
    className: '',
    width: 200,
    height: 200,
    border: '50%',
};

export const DarkRectangle = Template.bind({});
DarkRectangle.args = {
    className: '',
    width: 600,
    height: 200,
};

DarkRectangle.decorators = [
    themeDecorator(Theme.DARK),
];

export const DarkRound = Template.bind({});
DarkRound.args = {
    className: '',
    width: 200,
    height: 200,
    border: '50%',
};

DarkRound.decorators = [
    themeDecorator(Theme.DARK),
];
