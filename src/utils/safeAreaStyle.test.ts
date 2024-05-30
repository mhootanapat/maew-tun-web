import { SAFE_AREA_BOTTOM, SAFE_AREA_TOP } from '@/common/constants/safeAreaStyle';
import { getSafeArea, getSafeAreaPageBottom, getSafeAreaPageTop } from '@/utils/safeAreaStyle';

describe('safeAreaStyle', () => {
  describe('getSafeArea', () => {
    test.concurrent.each([
      // top
      {
        direction: 'top' as const,
        options: { offsetOperator: undefined, adjustSpacing: undefined } as const,
        expected: SAFE_AREA_TOP,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: undefined, adjustSpacing: '0px' } as const,
        expected: `calc(0px + ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: undefined, adjustSpacing: '100%' } as const,
        expected: `calc(100% + ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '+', adjustSpacing: '100%' } as const,
        expected: `calc(100% + ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '-', adjustSpacing: '100%' } as const,
        expected: `calc(100% - ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '*', adjustSpacing: '100%' } as const,
        expected: `calc(100% * ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '/', adjustSpacing: '100%' } as const,
        expected: `calc(100% / ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'bottom' as const,
        options: { offsetOperator: undefined, adjustSpacing: '-1px' } as const,
        expected: `calc(-1px + ${SAFE_AREA_BOTTOM})`,
      },

      // bottom
      {
        direction: 'bottom' as const,
        options: { offsetOperator: undefined, adjustSpacing: undefined } as const,
        expected: SAFE_AREA_BOTTOM,
      },
      {
        direction: 'bottom' as const,
        options: { offsetOperator: '-', adjustSpacing: '100%' } as const,
        expected: `calc(100% - ${SAFE_AREA_BOTTOM})`,
      },
      {
        direction: 'bottom' as const,
        options: { offsetOperator: '*', adjustSpacing: '100%' } as const,
        expected: `calc(100% * ${SAFE_AREA_BOTTOM})`,
      },
      {
        direction: 'bottom' as const,
        options: { offsetOperator: '/', adjustSpacing: '100%' } as const,
        expected: `calc(100% / ${SAFE_AREA_BOTTOM})`,
      },

      // edge
      {
        direction: 'top' as const,
        options: {} as const,
        expected: SAFE_AREA_TOP,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '+', adjustSpacing: undefined } as const,
        expected: SAFE_AREA_TOP,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '-', adjustSpacing: undefined } as const,
        expected: `calc(0px - ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '*', adjustSpacing: undefined } as const,
        expected: `calc(0px * ${SAFE_AREA_TOP})`,
      },
      {
        direction: 'top' as const,
        options: { offsetOperator: '/', adjustSpacing: undefined } as const,
        expected: `calc(0px / ${SAFE_AREA_TOP})`,
      },
    ])(
      'given direction is `$direction` with options adjustSpacing is `$options.adjustSpacing` and offsetOperator is `$options.offsetOperator`, should return `$expected`',
      // NOTE: require to be asynchronous function: https://jestjs.io/docs/api#testconcurrenteachtablename-fn-timeout
      // eslint-disable-next-line @typescript-eslint/require-await
      async ({ direction, options, expected }) => {
        expect(getSafeArea(direction, options)).toBe(expected);
      }
    );
    test('given direction is `top` and options is `undefined`, should return `$expected`', () => {
      expect(getSafeArea('top')).toBe(SAFE_AREA_TOP);
    });
  });

  describe('getSafeAreaPageTop', () => {
    test.concurrent.each([
      { adjustSpacing: undefined, expected: SAFE_AREA_TOP },
      { adjustSpacing: '-1px', expected: `calc(-1px + ${SAFE_AREA_TOP})` },
    ])(
      'given adjustSpacing is `$adjustSpacing`, should return `$expected`',
      // NOTE: require to be asynchronous function: https://jestjs.io/docs/api#testconcurrenteachtablename-fn-timeout
      // eslint-disable-next-line @typescript-eslint/require-await
      async ({ adjustSpacing, expected }) => {
        expect(getSafeAreaPageTop(adjustSpacing)).toBe(expected);
      }
    );
  });

  describe('getSafeAreaPageBottom', () => {
    test.concurrent.each([
      { adjustSpacing: undefined, expected: `calc(24px + ${SAFE_AREA_BOTTOM})` },
      { adjustSpacing: '-1px', expected: `calc(-1px + ${SAFE_AREA_BOTTOM})` },
    ])(
      'given adjustSpacing is `$adjustSpacing`, should return `$expected`',
      // NOTE: require to be asynchronous function: https://jestjs.io/docs/api#testconcurrenteachtablename-fn-timeout
      // eslint-disable-next-line @typescript-eslint/require-await
      async ({ adjustSpacing, expected }) => {
        expect(getSafeAreaPageBottom(adjustSpacing)).toBe(expected);
      }
    );
  });
});
