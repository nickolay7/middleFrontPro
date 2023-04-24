import { memo, useState } from 'react';
import { classNames } from '../../../lib/helpers/classNames';
import { Icon, StrokeColor } from '../../icon';
import Star from '../../../assets/icons/star.svg';
import { HStack } from '@/shared/ui/stack';

import cls from './starRating.module.scss';

export interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}
export const StarRating = memo(({ className, ...otherProps }: StarRatingProps) => {
    const { onSelect, selectedStars = 0, size } = otherProps;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setSelected] = useState(!!selectedStars);

    const onHover = (starNumber: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starNumber);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onStarClick = (starCount: number) => () => {
        if (!isSelected && onSelect) {
            onSelect(starCount);
            setCurrentStarsCount(starCount);
            setSelected(true);
        }
    };

    const stars = [1, 2, 3, 4, 5];

    return (
        <HStack className={classNames(cls.starRating, { [cls.isSelected]: isSelected }, [className])}>
            {
                stars.map(
                    (starNumber, i) => (
                        <Icon
                            // eslint-disable-next-line react/no-array-index-key
                            key={`starId-${i}`}
                            Svg={Star}
                            stroke={StrokeColor.SECONDARY}
                            className={classNames(cls.normal, {
                                [cls.selected]: (currentStarsCount) >= starNumber,
                            }, [])}
                            onMouseEnter={onHover(starNumber)}
                            onMouseLeave={onLeave}
                            onClick={onStarClick(starNumber)}
                            size={size}
                        />
                    ),
                )
            }
        </HStack>
    );
});
