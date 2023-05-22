import { ReactElement } from 'react';
import { getFeatureFlag } from './featureFlagsSetter';
import { FeatureFlags } from '../../../types/featureFlags';

export interface ToggleFeaturesElementProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeaturesElement = ({
    on,
    off,
    feature,
}: ToggleFeaturesElementProps) => {
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
