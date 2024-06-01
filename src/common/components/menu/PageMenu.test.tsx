// PageMenu.test.js

import PageMenu from '@/common/components/menu/PageMenu';
import { pageTabInfoList } from '@/common/constants/pageTabList';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('PageMenu', () => {
  const mockPush = jest.fn();
  const mockUseRouter = useRouter;

  beforeEach(() => {
    (mockUseRouter as jest.Mock).mockReturnValue({
      asPath: pageTabInfoList[0].value,
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the menu button with the correct title', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageMenu />
      </ThemeProvider>
    );
    const button = getByRole('button', { name: pageTabInfoList[0].title });
    expect(button).toBeInTheDocument();
  });

  it('should open the menu when the button is clicked', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageMenu />
      </ThemeProvider>
    );
    const button = getByRole('button', { name: pageTabInfoList[0].title });
    fireEvent.click(button);
    const menu = getByRole('menu');
    expect(menu).toBeVisible();
  });

  it('should close the menu when a menu item is clicked', () => {
    const { getByRole, queryByRole } = render(
      <ThemeProvider theme={theme}>
        <PageMenu />
      </ThemeProvider>
    );
    const button = getByRole('button', { name: pageTabInfoList[0].title });
    fireEvent.click(button);
    const menuItem = getByRole('menuitem', { name: pageTabInfoList[1].title });
    fireEvent.click(menuItem);
    expect(queryByRole('menu')).not.toBeInTheDocument();
  });

  it('should navigate to the correct page when a menu item is clicked', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageMenu />
      </ThemeProvider>
    );
    const button = getByRole('button', { name: pageTabInfoList[0].title });
    fireEvent.click(button);
    const menuItem = getByRole('menuitem', { name: pageTabInfoList[1].title });
    fireEvent.click(menuItem);
    expect(mockPush).toHaveBeenCalledWith(pageTabInfoList[1].value);
  });

  it('should not navigate when the selected menu item is clicked', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageMenu />
      </ThemeProvider>
    );
    const button = getByRole('button', { name: pageTabInfoList[0].title });
    fireEvent.click(button);
    const menuItem = getByRole('menuitem', { name: pageTabInfoList[0].title });
    fireEvent.click(menuItem);
    expect(mockPush).not.toHaveBeenCalled();
  });
});
