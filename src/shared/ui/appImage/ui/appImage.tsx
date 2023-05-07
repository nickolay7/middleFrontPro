import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src: string;
    alt?: string;
    fallback?: ReactElement;
    error?: ReactElement;
}

export const AppImage = memo(({ className, ...otherProps }: AppImageProps) => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const { src, alt = 'image', fallback, error } = otherProps;

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setLoading(false);
        };
        img.onerror = () => {
            setLoading(false);
            setError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && error) {
        return error;
    }

    return <img {...otherProps} src={src} alt={alt} className={className} />;
});
