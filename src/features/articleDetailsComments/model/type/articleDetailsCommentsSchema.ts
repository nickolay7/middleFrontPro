import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/comment/model/types/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
    data?: Record<string, Comment>;
}
