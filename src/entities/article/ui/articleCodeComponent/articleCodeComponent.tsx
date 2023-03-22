import { classNames } from 'shared/lib/helpers/classNames';
import { memo } from 'react';
import { Code } from 'shared/ui/code';
import { Button, ButtonTheme } from 'shared/ui/button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { StrokeColor, Icon } from 'shared/ui/icon';
import cls from './articleCodeComponent.module.scss';

export interface ArticleBlockComponentProps {
  className?: string;
  text: string;
}
export const ArticleCodeComponent = memo(({ className, text }: ArticleBlockComponentProps) => {
    const onCopy = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleCodeComponent, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button className={cls.copyBtn} variant={ButtonTheme.CLEAR} onClick={onCopy}>
                <Icon Svg={CopyIcon} stroke={StrokeColor.PRIMARY} />
            </Button>
            <Code>
                {text}
            </Code>
        </div>
    );
});
