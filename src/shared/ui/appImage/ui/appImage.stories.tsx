import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '../../../config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { AppImage, AppImageProps } from './appImage';
import { Skeleton } from '../../skeleton';
import { Text } from '../../text';

const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJ-JnN80vcPU55w8QlRRlwwCjg4eS3bTGLQ&usqp=CAU';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args: AppImageProps) => (
    <AppImage {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    src: imgUrl,
};

export const LightLoading = Template.bind({});
LightLoading.args = {
    className: '',
    src: imgUrl,
    fallback: <Skeleton width={300} height={200} />,
};

export const LightError = Template.bind({});
LightError.args = {
    className: '',
    src: 'hgfdghdf',
    error: <Text title="downloading error" />,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    src: imgUrl,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
