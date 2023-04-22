import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { Modal } from './modal';

export default {
    title: 'shared/modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const content = 'Lorem ipsum dolor sit amet,'
    + ' consectetur adipisicing elit.'
    + ' Ex fuga necessitatibus obcaecati perspiciatis saepe!'
    + ' Aliquam assumenda blanditiis consectetur enim eos incidunt minus,'
    + ' nisi optio placeat quidem quos rem suscipit, tempore.';

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isModalOpen: false,
    children: content,
};

Light.decorators = [
    themeDecorator(),
];

export const Dark = Template.bind({});
Dark.args = {
    isModalOpen: false,
    children: content,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
