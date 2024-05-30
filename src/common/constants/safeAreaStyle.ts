import { isIOS, isMobile } from 'react-device-detect';

let safeAreaTop = '0px';
let safeAreaBottom = '0px';

if (isMobile) {
  safeAreaTop = isIOS ? 'env(safe-area-inset-top, 56px)' : '44px';
  safeAreaBottom = isIOS ? 'env(safe-area-inset-bottom, 32px)' : '8px';
}

export const SAFE_AREA_TOP = safeAreaTop;
export const SAFE_AREA_BOTTOM = safeAreaBottom;
