import { lazy, FC } from 'react';
import { ArticleDetailsPageProps } from './articleDetailsPage';

export const ArticlesDetailsPageAsync = lazy <FC<ArticleDetailsPageProps>>(() => import('./articleDetailsPage'));
