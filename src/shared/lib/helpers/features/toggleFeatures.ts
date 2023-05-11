import { getFeatureFlag } from './featureFlagsSetter';
import { FeatureFlags } from '../../../types/featureFlags';

export interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export const toggleFeatures = <T>({
    on,
    off,
    name,
}: ToggleFeaturesOptions<T>) => {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
};
