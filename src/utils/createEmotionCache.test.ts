import createEmotionCache from '@/utils/createEmotionCache';
import createCache from '@emotion/cache';

jest.mock('@emotion/cache', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('createEmotionCache', () => {
  test('creates cache with the correct configuration', () => {
    // NOTE: Mock the return value of createCache
    const mockCache = {};
    (createCache as jest.Mock).mockReturnValue(mockCache);

    // NOTE: Call the function to create the cache
    const cache = createEmotionCache();

    // NOTE: Assert that createCache was called with the correct parameters
    expect(createCache).toHaveBeenCalledWith({ key: 'css', prepend: true });

    // NOTE: Ensure the returned value is the result of createCache
    expect(cache).toBe(mockCache);
  });
});
