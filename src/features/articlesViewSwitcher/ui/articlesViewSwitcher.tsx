import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import PlateIcon from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import { ArticleView } from '@/entities/article';
import { Button } from '@/shared/ui/button';
import { Icon, StrokeColor } from '@/shared/ui/icon';
import { useAppDispatch } from '@/app/providers/storeProvider/config/hooks';
import { setView } from '@/pages/articlesPage/model/slice/articlesPageSlice';
import { Switchers } from '../lib/types/switchers';

import cls from './articlesViewSwitcher.module.scss';

export interface ArticlesViewSwitcherProps {
    className?: string;
    view?: ArticleView;
}
export const ArticlesViewSwitcher = memo(({ className, view }: ArticlesViewSwitcherProps) => {
    const dispatch = useAppDispatch();
    const switchers: Switchers[] = [
        {
            icon: PlateIcon,
            view: ArticleView.PLATE,
        },
        {
            icon: ListIcon,
            view: ArticleView.LIST,
        },
    ];

    const onSwitchView = (view: ArticleView) => () => {
        dispatch(setView(view));
    };

    return (
        <div className={classNames(cls.articlesViewSwitcher, {}, [className])}>
            {switchers.map((item) => (
                <Button key={item.view} onClick={onSwitchView(item.view)}>
                    <Icon
                        Svg={item.icon}
                        stroke={StrokeColor.PRIMARY}
                        className={classNames('', {
                            [cls.selected]: view === item.view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
