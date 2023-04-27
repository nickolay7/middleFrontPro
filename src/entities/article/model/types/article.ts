import { User } from '../../../user';
import { ArticleType } from '@/shared/types/articleTypes';

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

interface ArticleBaseBlock {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
    type: ArticleBlockType.TEXT;
    title: string;
    paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlock {
   type: ArticleBlockType.IMAGE;
   src: string;
   title: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export interface Article {
     id: string;
     user: User;
     title: string;
     subtitle: string;
     img: string;
     views: number;
     createdAt: string;
     type: ArticleType;
     blocks: ArticleBlock[];
 }

export enum ArticleView {
    PLATE = 'plate',
    LIST = 'list',
}
