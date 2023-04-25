import {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Card } from '@/shared/ui/card';
import { HStack, VStack } from '@/shared/ui/stack';
import { Text } from '@/shared/ui/text';
import { StarRating } from '@/shared/ui/starRating';
import { Modal } from '@/shared/ui/modal';

import cls from './ratingCard.module.scss';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { ElementTheme } from '@/shared/types/ui';
import { Drawer } from '@/shared/ui/drawer';

export interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback: string) => void;
  rate?: number;
}
export const RatingCard = memo(({ className, ...otherProps }: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        title, feedbackTitle, hasFeedback = true, onAccept, onCancel, rate = 0,
    } = otherProps;

    const [starsCount, setStarsCount] = useState<number>(rate);
    const [isModalOpen, setModalOpen] = useState(false);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = (starNumber: number) => {
        setStarsCount(starNumber);
        if (hasFeedback) {
            setModalOpen(true);
        } else if (onAccept) onAccept(starsCount, feedback);
    };

    const acceptHandle = () => {
        setModalOpen(false);
        onAccept?.(starsCount, feedback);
    };

    const cancelHandle = () => {
        setModalOpen(false);
        onCancel?.(starsCount);
    };

    const onModalToggle = () => {
        setModalOpen((prev) => !prev);
    };

    const onFeedbackChange = useCallback((text: string) => {
        setFeedback(text);
    }, []);

    const modalContent = (
        <VStack gap="gap32">
            <Text title={feedbackTitle} />
            <Input label={false} placeholder={t('Ваш отзыв')} name="feedback" onChange={onFeedbackChange} />
            <HStack gap="gap8" justify="justifyEnd">
                <Button onClick={cancelHandle} variant={ElementTheme.OUTLINE_ORANGE}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandle} variant={ElementTheme.OUTLINE}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames(cls.ratingCard, {}, [className])}>
            <VStack gap="gap16">
                <Text title={title} />
                <StarRating onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            <BrowserView>
                <Modal isModalOpen={isModalOpen} toggleHandler={onModalToggle}>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={onModalToggle}>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});
