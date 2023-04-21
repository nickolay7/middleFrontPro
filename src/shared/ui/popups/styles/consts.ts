import popupsCls from './popups.module.scss';
import { DropdownDirection } from '../../../types/ui';

export const popupDirections: Record<DropdownDirection, any> = {
    downRight: popupsCls.downRight,
    downLeft: popupsCls.downLeft,
    topRight: popupsCls.topRight,
    topLeft: popupsCls.topLeft,
    down: popupsCls.down,
    top: popupsCls.top,
};
