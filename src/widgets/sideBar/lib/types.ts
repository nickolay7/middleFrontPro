import { SVGProps, VFC } from 'react';

export enum LinkPath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile/',
    ARTICLES = '/articles/'
}

export interface MenuItem {
    to: string;
    title: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    className?: string;
    isOpen?: boolean;
    authOnly?: boolean;
}
