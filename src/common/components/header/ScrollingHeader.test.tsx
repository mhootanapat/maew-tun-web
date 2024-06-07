import ScrollingHeader from '@/common/components/header/ScrollingHeader';
import useScrollDirection from '@/common/hooks/useScrollDirection';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';

jest.mock('@/common/hooks/useScrollDirection');

const mockedUseScrollDirection = useScrollDirection as jest.MockedFunction<typeof useScrollDirection>;

describe('ScrollingHeader', () => {
  const title = 'Test Title';

  beforeEach(() => {
    mockedUseScrollDirection.mockReset();
  });

  it('renders children when triggered and no title provided', () => {
    mockedUseScrollDirection.mockReturnValue({
      isTriggered: true,
      scrollClassName: 'triggered',
      scrollDirection: null,
    });

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ScrollingHeader>
          <div>Child Content</div>
        </ScrollingHeader>
      </ThemeProvider>
    );

    expect(getByText('Child Content')).toBeInTheDocument();
    const header = getByTestId('scrolling-header');
    expect(header).toHaveClass('triggered');
  });

  it('renders title and children when triggered', () => {
    mockedUseScrollDirection.mockReturnValue({
      isTriggered: true,
      scrollClassName: 'triggered',
      scrollDirection: null,
    });

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ScrollingHeader title={title}>
          <div>Child Content</div>
        </ScrollingHeader>
      </ThemeProvider>
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Child Content')).toBeInTheDocument();
    const header = getByTestId('scrolling-header');
    expect(header).toHaveClass('triggered');
  });

  it('does not render title or children when not triggered', () => {
    mockedUseScrollDirection.mockReturnValue({
      isTriggered: false,
      scrollClassName: '',
      scrollDirection: null,
    });

    const { queryByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ScrollingHeader title={title}>
          <div>Child Content</div>
        </ScrollingHeader>
      </ThemeProvider>
    );

    expect(queryByText('Test Title')).not.toBeInTheDocument();
    expect(queryByText('Child Content')).not.toBeInTheDocument();
    const header = getByTestId('scrolling-header');
    expect(header).not.toHaveClass('triggered');
  });

  it('hides the header when scrollClassName is "hide"', () => {
    mockedUseScrollDirection.mockReturnValue({
      isTriggered: false,
      scrollClassName: 'hide',
      scrollDirection: null,
    });

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ScrollingHeader title={title}>
          <div>Child Content</div>
        </ScrollingHeader>
      </ThemeProvider>
    );

    const header = getByTestId('scrolling-header');
    expect(header).toHaveClass('hide');
  });
});
