import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Text } from 'shared/ui/text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../commentCard/commentCard';
import cls from './commentList.module.scss';

export interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}
export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    /* eslint-disable  @typescript-eslint/no-unused-vars */
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {
                comments
                    ? comments
                        .map((comment) => <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />)
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
