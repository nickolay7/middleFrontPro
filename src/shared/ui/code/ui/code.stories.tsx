import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { Code, CodeProps } from './code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args: CodeProps) => (
    <Code {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    children: `
        export default {
            title: '/Code',
            component: Code,
            argTypes: {
                backgroundColor: { control: 'color' },
            },
        } as ComponentMeta<typeof Code>;
    `,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    children: `
        export default {
            title: '/Code',
            component: Code,
            argTypes: {
                backgroundColor: { control: 'color' },
            },
        } as ComponentMeta<typeof Code>;
    `,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
