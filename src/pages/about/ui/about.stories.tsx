import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { storeDecorator } from '@/shared/config/decorators/storeDecorator';
import About from './about';

export default {
    title: 'pages/About',
    component: About,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Light = Template.bind({});

Light.decorators = [storeDecorator({})];

export const Dark = Template.bind({});

Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];
