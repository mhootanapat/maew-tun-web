/* eslint-disable @typescript-eslint/unbound-method */
import useFontLoad from '@/common/hooks/useFontLoad';
import { act, renderHook, waitFor } from '@testing-library/react';

const mockFonts = {
  ready: Promise.resolve(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

describe('useFontLoad', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'fonts', {
      value: mockFonts,
      writable: true,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set fontsLoaded to true when document.fonts is ready', async () => {
    const { result } = renderHook(() => useFontLoad());

    await waitFor(() => {
      expect(result.current.fontsLoaded).toBe(true);
    });

    expect(document.fonts.addEventListener).toHaveBeenCalledWith('loadingdone', expect.any(Function));
  });

  it('should set fontsLoaded to true when loadingdone event is triggered', async () => {
    const { result } = renderHook(() => useFontLoad());

    act(() => {
      // Simulate the loadingdone event
      const event = new Event('loadingdone');
      mockFonts.addEventListener.mock.calls[0][1](event);
    });

    await waitFor(() => {
      expect(result.current.fontsLoaded).toBe(true);
    });
  });

  it('should clean up the event listener on unmount', () => {
    const { unmount } = renderHook(() => useFontLoad());

    unmount();

    expect(document.fonts.removeEventListener).toHaveBeenCalledWith('loadingdone', expect.any(Function));
  });
});
