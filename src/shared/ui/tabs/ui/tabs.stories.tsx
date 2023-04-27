import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
// eslint-disable-next-line fsd-for-test/layer-imports
import { Tabs, TabsProps } from './tabs';
import { ArticleType } from '@/shared/types/articleTypes';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => (
    <Tabs {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    tabs: [
        {
            value: ArticleType.ALL_ARTICLES,
            content: 'Все статьи',
        },
        {
            value: ArticleType.IT,
            content: 'Инфо техно',
        },
        {
            value: ArticleType.ART,
            content: 'Искусство',
        },
    ],
    activeTab: 'ALL_ARTICLES',
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    tabs: [
        {
            value: ArticleType.ALL_ARTICLES,
            content: 'Все статьи',
        },
        {
            value: ArticleType.IT,
            content: 'Инфо техно',
        },
        {
            value: ArticleType.ART,
            content: 'Искусство',
        },
    ],
    activeTab: 'ALL_ARTICLES',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
