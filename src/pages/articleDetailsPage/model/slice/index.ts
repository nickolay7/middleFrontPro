import { combineReducers } from '@reduxjs/toolkit';
import { recommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { commentsReducer } from './articleDetailsPageCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducers = combineReducers<ArticleDetailsPageSchema>({
    articleDetailsComments: commentsReducer,
    articleDetailsRecommends: recommendationsReducer,
});
