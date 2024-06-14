import NavigationHeader from '@/common/components/header/NavigationHeader';
import theme from '@/theme';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { render } from '@testing-library/react';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    asPath: '/',
  })),
}));

const mockedUseMediaQuery = useMediaQuery as jest.MockedFunction<typeof useMediaQuery>;

describe('NavigationHeader', () => {
  beforeEach(() => {
    mockedUseMediaQuery.mockReset();
  });

  it('renders PageTabs on large screens', () => {
    mockedUseMediaQuery.mockReturnValue(true);

    const { getByAltText, getByTestId, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavigationHeader />
      </ThemeProvider>
    );

    expect(getByAltText('Maew Tun Logo')).toBeInTheDocument();
    expect(getByAltText('Maew Tun Text Logo')).toBeInTheDocument();
    expect(getByTestId('page-tab-list')).toBeInTheDocument();
    expect(queryByTestId('page-menu-container')).not.toBeInTheDocument();
  });

  it('renders PageMenu on small screens', () => {
    mockedUseMediaQuery.mockReturnValue(false);

    const { getByAltText, getByTestId, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavigationHeader />
      </ThemeProvider>
    );

    expect(getByAltText('Maew Tun Logo')).toBeInTheDocument();
    expect(getByAltText('Maew Tun Text Logo')).toBeInTheDocument();
    expect(queryByTestId('page-tab-list')).not.toBeInTheDocument();
    expect(getByTestId('page-menu-container')).toBeInTheDocument();
  });
});
