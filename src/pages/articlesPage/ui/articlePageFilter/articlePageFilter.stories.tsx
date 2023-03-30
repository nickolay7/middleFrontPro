import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticlePageFilter, ArticlePageFilterProps } from './articlePageFilter';
import { storeDecorator } from '../../../../shared/config/decorators/storeDecorator';

export default {
    title: 'pages/ArticlePageFilter',
    component: ArticlePageFilter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilter>;

const Template: ComponentStory<typeof ArticlePageFilter> = (args: ArticlePageFilterProps) => (
    <ArticlePageFilter {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
};

Light.decorators = [
    storeDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
];
