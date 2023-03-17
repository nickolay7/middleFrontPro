import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Skeleton } from 'shared/ui/skeleton';
import { Avatar } from 'shared/ui/avatar';
import { Text } from 'shared/ui/text';
import cls from './commentCard.module.scss';
import { Comment } from '../../model/types/comment';

export interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}
export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={cls.commentCard}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton className={cls.bottomSkeleton} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                <Avatar className={cls.avatar} src={comment.user.avatar} size={30} />
                <Text title={comment.user.username} />
            </div>
            <Text className={cls.comment} text={comment.text} />
        </div>
    );
});
