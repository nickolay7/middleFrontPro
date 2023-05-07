import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { storeDecorator } from '@/shared/config/decorators/storeDecorator';
import { NotificationsList, NotificationsListProps } from './notificationsList';
import { Notification } from '../../model/types/notifications';

const notification: Notification = {
    id: '1',
    title: 'test',
    description: 'some description',
};

export default {
    title: 'entities/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, storeDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notification },
                    { ...notification, id: '2' },
                    { ...notification, id: '3' },
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (
    args: NotificationsListProps,
) => <NotificationsList {...args} />;

export const Light = Template.bind({});
Light.args = {
    className: '',
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [themeDecorator(Theme.DARK)];
