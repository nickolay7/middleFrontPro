import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { Text } from 'shared/ui/text';
import { CommentList } from 'entities/comment';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { commentsSelector } from 'pages/articleDetailsPage/model/slice/articleDetailsPageCommentsSlice';
import {
    getArticleCommentsStateSelector,
} from 'pages/articleDetailsPage/model/selectors/getArticleCommentsStateSelector/getArticleCommentsStateSelector';
import { useInitialEffect } from 'shared/lib/hooks';
import { fetchCommentsByArticleId } from 'pages/articleDetailsPage';
import {
    addCommentForArticle,
} from 'pages/articleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentForm } from '../../../addCommentForm';

import cls from './articleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');

    const comments = useAppSelector(commentsSelector.selectAll);
    const commentsState = useAppSelector(getArticleCommentsStateSelector);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return <Text title={t('Статья не найдена')} />;
    }

    const onSendComment = (text: string) => {
        dispatch(addCommentForArticle(text));
    };

    return (
        <div className={classNames(cls.articleDetailsComments, {}, [className])}>
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsState?.isLoading} />
        </div>
    );
});
