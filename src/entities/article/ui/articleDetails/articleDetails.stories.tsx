import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/config/decorators/storeDecorator';
import { StateSchema } from 'app/providers/storeProvider';
import { ArticleDetails, ArticleDetailsProps } from './articleDetails';
import { articleStateMock } from '../../model/mocks/articleStateMock';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args: ArticleDetailsProps) => (
    <ArticleDetails {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
};

Light.decorators = [
    storeDecorator(articleStateMock as StateSchema),
];

export const IsLoading = Template.bind({});
IsLoading.args = {
    className: '',
};

IsLoading.decorators = [
    storeDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {
    className: '',
};

Error.decorators = [
    storeDecorator({
        articleDetails: {
            error: 'Что-то пошло не так!',
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator(articleStateMock as StateSchema),
];
