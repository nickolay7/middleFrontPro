import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

export type SpringType = typeof import('@react-spring/web');
export type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: { children: ReactNode}) => {
    const gestureRef = useRef<GestureType>();
    const springRef = useRef<SpringType>();
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            springRef.current = Spring;
            gestureRef.current = Gesture;
            setLoaded(true);
        });
    }, []);

    const value: AnimationContextPayload = useMemo(() => ({
        Gesture: gestureRef.current,
        Spring: springRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider
            value={value}
        >
            {children}
        </AnimationContext.Provider>
    );
};
