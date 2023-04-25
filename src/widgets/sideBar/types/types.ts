import { SVGProps, VFC } from 'react';

export enum LinkPath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile/',
    ARTICLES = '/articles/',
    ADMIN = '/admin',
}

export interface MenuItem {
    to: string;
    title: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    className?: string;
    isOpen?: boolean;
    authOnly?: boolean;
}
