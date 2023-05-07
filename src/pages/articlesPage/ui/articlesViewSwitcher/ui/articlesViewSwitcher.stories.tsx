import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { storeDecorator } from '@/shared/config/decorators/storeDecorator';
import { ArticleView } from '@/entities/article';
import {
    ArticlesViewSwitcher,
    ArticlesViewSwitcherProps,
} from './articlesViewSwitcher';

export default {
    title: 'features/ArticlesViewSwitcher',
    component: ArticlesViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesViewSwitcher>;

const Template: ComponentStory<typeof ArticlesViewSwitcher> = (
    args: ArticlesViewSwitcherProps,
) => <ArticlesViewSwitcher {...args} />;

export const LightPlate = Template.bind({});
LightPlate.args = {
    className: '',
    view: ArticleView.PLATE,
};

LightPlate.decorators = [storeDecorator({})];

export const LightList = Template.bind({});
LightList.args = {
    className: '',
    view: ArticleView.LIST,
};

LightList.decorators = [storeDecorator({})];

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    className: '',
    view: ArticleView.PLATE,
};

DarkPlate.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const DarkList = Template.bind({});
DarkList.args = {
    className: '',
    view: ArticleView.LIST,
};

DarkList.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];
