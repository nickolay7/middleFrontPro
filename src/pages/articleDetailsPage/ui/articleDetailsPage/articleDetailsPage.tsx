import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers/classNames';
import { ArticleDetails } from 'entities/article';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import {
    ArticleRecommendationsList,
} from 'features/articleRecommendationsList/ui/articleRecommendationsList/articleRecommendationsList';
import { ArticleDetailsComments } from 'features/articleDetailsComments';
import { articleDetailsPageReducers } from '../../model/slice';
import { HeaderDetailsPageAsync as HeaderDetailsPage } from '../headerDetailsPage/headerDetailsPageAsync';

import cls from './articleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
  className?: string;
}

const reducers = {
    articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams();
    useDynamicModuleLoader(reducers, true);

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <HeaderDetailsPage />
            <ArticleDetails id={id} />
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
