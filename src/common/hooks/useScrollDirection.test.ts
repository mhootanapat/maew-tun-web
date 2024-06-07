import SCROLL_DIRECTION from '@/common/enums/scrollDirection';
import useScrollDirection from '@/common/hooks/useScrollDirection';
import { act, renderHook } from '@testing-library/react';

describe('useScrollDirection', () => {
  const triggerPosition = 100;
  const bottomPositionOffset = 40;

  const mockScrollEvent = (scrollY: number) => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: scrollY,
    });

    window.dispatchEvent(new Event('scroll'));
  };

  beforeEach(() => {
    Object.defineProperty(document.body, 'scrollHeight', {
      writable: true,
      configurable: true,
      value: 2000,
    });

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 800,
    });
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useScrollDirection());

    expect(result.current.scrollDirection).toBe(null);
    expect(result.current.isTriggered).toBe(false);
    expect(result.current.scrollClassName).toBe('');
  });

  it('should update scroll direction and triggered state on scroll', () => {
    const { result } = renderHook(() => useScrollDirection({ triggerPosition }));

    act(() => {
      mockScrollEvent(0);
    });

    expect(result.current.scrollDirection).toBe(null);
    expect(result.current.isTriggered).toBe(false);
    expect(result.current.scrollClassName).toBe('');

    act(() => {
      mockScrollEvent(150);
    });

    expect(result.current.scrollDirection).toBe(SCROLL_DIRECTION.DOWN);
    expect(result.current.isTriggered).toBe(true);
    expect(result.current.scrollClassName).toBe('hide triggered');

    act(() => {
      mockScrollEvent(50);
    });

    expect(result.current.scrollDirection).toBe(SCROLL_DIRECTION.UP);
    expect(result.current.isTriggered).toBe(false);
    expect(result.current.scrollClassName).toBe('');
  });

  it('should update bottom of page state', () => {
    const { result } = renderHook(() => useScrollDirection({ bottomPositionOffset }));

    act(() => {
      mockScrollEvent(1160); // scrollY + innerHeight = 1160 + 800 = 1960
    });

    expect(result.current.isTriggered).toBe(true);
    expect(result.current.scrollClassName).toBe('hide triggered');

    act(() => {
      mockScrollEvent(500); // scrollY + innerHeight = 500 + 800 = 1300
    });

    expect(result.current.isTriggered).toBe(true);
    expect(result.current.scrollClassName).toBe('triggered');
  });
});
