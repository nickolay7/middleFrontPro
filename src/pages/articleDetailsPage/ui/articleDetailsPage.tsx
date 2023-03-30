import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers/classNames';
import { ArticleDetails, ArticlesList, ArticleView } from 'entities/article';
import { Text } from 'shared/ui/text';
import { CommentList } from 'entities/comment';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { commentsSelector } from '../model/slice/articleDetailsPageCommentsSlice';
import {
    getArticleCommentsStateSelector,
} from '../model/selectors/getArticleCommentsStateSelector/getArticleCommentsStateSelector';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { recommendationsSelector } from '../model/slice/articleDetailsPageRecommendationsSlice';

import cls from './articleDetailsPage.module.scss';
import {
    ArticlePageRecommendationsIsLoadingSelector,
} from '../model/selectors/articlePageRecommendationsSelector/articlePageRecommendationsSelector';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducers } from '../model/slice';

export interface ArticleDetailsPageProps {
  className?: string;
}

const reducers = {
    articleDetailsPage: articleDetailsPageReducers,
};
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams();
    const { t } = useTranslation('articles');
    useDynamicModuleLoader(reducers, true);
    const comments = useAppSelector(commentsSelector.selectAll);
    const commentsState = useAppSelector(getArticleCommentsStateSelector);
    const recommendationsIsLoading = useAppSelector(ArticlePageRecommendationsIsLoadingSelector);
    const recommendations = useAppSelector(recommendationsSelector.selectAll);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return <Text title={t('Статья не найдена')} />;
    }

    const onSendComment = (text: string) => {
        dispatch(addCommentForArticle(text));
    };

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.recommendationsTitle} title={t('Рекомендации')} />
            <ArticlesList
                className={cls.recommendationsList}
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                view={ArticleView.PLATE}
            />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsState?.isLoading} />
        </div>
    );
};

export default ArticleDetailsPage;
