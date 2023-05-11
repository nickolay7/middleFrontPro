import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export const setFeatureFlags = (features?: FeatureFlags) => {
    if (features) featureFlags = features;
};

export const getFeatureFlag = (name: keyof FeatureFlags) => featureFlags[name];
