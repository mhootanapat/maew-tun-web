// PageTabs.test.js

import PageTabs from '@/common/components/tabs/PageTabs';
import { pageTabInfoList } from '@/common/constants/pageTabList';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('PageTabs', () => {
  const mockPush = jest.fn();
  const mockUseRouter = useRouter;
  let mockPageTabInfoList = pageTabInfoList;

  beforeEach(() => {
    (mockUseRouter as jest.Mock).mockReturnValue({
      asPath: pageTabInfoList[0].value,
      push: mockPush,
    });
  });

  afterEach(() => {
    mockPageTabInfoList = pageTabInfoList;
    jest.clearAllMocks();
  });

  it('should render all tabs with the correct titles', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageTabs />
      </ThemeProvider>
    );
    mockPageTabInfoList.forEach((tab) => {
      const tabElement = getByRole('tab', { name: tab.title });
      expect(tabElement).toBeInTheDocument();
    });
  });

  it('should highlight the active tab based on the current router path', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageTabs />
      </ThemeProvider>
    );
    const activeTab = getByRole('tab', { name: mockPageTabInfoList[0].title });
    expect(activeTab).toHaveClass('Mui-selected');
  });

  it('should navigate to the correct page when a tab is clicked', () => {
    mockPageTabInfoList[1].disabled = false;
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageTabs />
      </ThemeProvider>
    );
    const inactiveTab = getByRole('tab', { name: mockPageTabInfoList[1].title });
    fireEvent.click(inactiveTab);
    expect(mockPush).toHaveBeenCalledWith(mockPageTabInfoList[1].value);
  });

  it('should not navigate when the active tab is clicked', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageTabs />
      </ThemeProvider>
    );
    const activeTab = getByRole('tab', { name: mockPageTabInfoList[0].title });
    fireEvent.click(activeTab);
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should disable tabs correctly', () => {
    mockPageTabInfoList[1].disabled = true;
    mockPageTabInfoList[2].disabled = true;

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <PageTabs />
      </ThemeProvider>
    );
    const disabledTabs = mockPageTabInfoList.filter((tab) => tab.disabled);
    disabledTabs.forEach((tab) => {
      const tabElement = getByRole('tab', { name: tab.title });
      expect(tabElement).toBeDisabled();
    });
  });
});
