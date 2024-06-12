import { lineAddFriendUrl } from '@/common/constants/socialMediaList';
import LineContact from '@/sections/homePage/MaewTunFamilyIntro/LineContact';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { t } from 'i18next';

describe('LineContact Component', () => {
  test('renders correctly with the Line QR code and text', () => {
    const { getByText, getByAltText } = render(
      <ThemeProvider theme={theme}>
        <LineContact pageLoading={false} />
      </ThemeProvider>
    );

    // NOTE: Check if the QR code image is rendered
    const qrImage = getByAltText('Line QR');
    expect(qrImage).toBeInTheDocument();

    // NOTE: Check that the src attribute contains the expected path
    const src = qrImage.getAttribute('src');
    expect(src).toContain('friend-siriyakorn-line-qr.jpg');

    // NOTE: Check if the ribbon text is rendered
    const ribbonText = getByText(t('forWorkOnly'));
    expect(ribbonText).toBeInTheDocument();

    // NOTE: Check if the Line text is rendered
    const lineText = getByText(t('line'));
    expect(lineText).toBeInTheDocument();
  });

  test('opens new tab when clicking on the Line container', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <LineContact pageLoading={false} />
      </ThemeProvider>
    );

    // NOTE: Mock the window.open function
    const originalOpen = window.open;
    window.open = jest.fn();

    // NOTE: Get the Line container
    const lineContainer = getByText(t('line')).parentElement;

    // NOTE: Simulate a click on the Line container
    fireEvent.click(lineContainer!);

    // Check if window.open was called with the correct URL and options
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining(lineAddFriendUrl),
      '_blank',
      'noopener,noreferrer'
    );

    // NOTE: Restore the original window.open function
    window.open = originalOpen;
  });

  test('handles missing Line QR code image gracefully', () => {
    const { getByAltText, getByText } = render(
      <ThemeProvider theme={theme}>
        <LineContact pageLoading={false} />
      </ThemeProvider>
    );

    // NOTE: Check if the QR code image is rendered
    const qrImage = getByAltText('Line QR');

    // NOTE: Remove the QR code image from the DOM
    qrImage.remove();

    // NOTE: Check that the Line text is still rendered
    const lineText = getByText(t('line'));
    expect(lineText).toBeInTheDocument();
  });
});
