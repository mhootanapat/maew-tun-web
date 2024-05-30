import { SAFE_AREA_BOTTOM, SAFE_AREA_TOP } from '@/common/constants/safeAreaStyle';
import theme from '@/theme';

type TDirection = 'top' | 'bottom';
type TOffsetOperator = '+' | '-' | '*' | '/';
type TAdjustSpacing = string;

interface IGetSafeAreaOptions {
  offsetOperator?: TOffsetOperator;
  adjustSpacing?: TAdjustSpacing;
}

const mappingSafeAreaStyleByDirection = {
  top: SAFE_AREA_TOP,
  bottom: SAFE_AREA_BOTTOM,
} satisfies Record<TDirection, string>;

export const getSafeArea = (
  direction: TDirection,
  { adjustSpacing, offsetOperator = '+' }: IGetSafeAreaOptions = {}
) => {
  const safeAreaValue = mappingSafeAreaStyleByDirection[direction];
  const isIncreaseOperator = offsetOperator === '+';

  if (isIncreaseOperator && !adjustSpacing) {
    return `${safeAreaValue}`;
  }

  return `calc(${adjustSpacing ?? '0px'} ${offsetOperator} ${safeAreaValue})`;
};

export const getSafeAreaPageTop = (adjustSpacing?: TAdjustSpacing) => getSafeArea('top', { adjustSpacing });
export const getSafeAreaPageBottom = (adjustSpacing: TAdjustSpacing = theme.spacing(3)) =>
  getSafeArea('bottom', { adjustSpacing });
