import { createSelector } from '@reduxjs/toolkit';
import { authUserSelector } from 'entities/user';
import { articleDetailsSelector } from 'entities/article/model/selectors/articleDetailsSelector';

export const getIsEditable = createSelector(
    authUserSelector,
    articleDetailsSelector,
    (authData, article) => {
        if (!authData && !article) {
            return false;
        }

        return article?.data?.user?.id === authData?.id;
    },
);
