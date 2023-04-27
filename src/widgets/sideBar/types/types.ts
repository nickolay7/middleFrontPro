import { SVGProps, VFC } from 'react';

export interface MenuItem {
    to: string;
    title: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    className?: string;
    isOpen?: boolean;
    authOnly?: boolean;
}
