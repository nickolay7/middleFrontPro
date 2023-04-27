import { SVGProps, VFC } from 'react';
import { ArticleView } from '@/entities/article';

export interface Switchers {
    icon: VFC<SVGProps<SVGSVGElement>>;
    view: ArticleView;
}
