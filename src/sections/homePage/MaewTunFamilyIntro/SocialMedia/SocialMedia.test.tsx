import { socialMediaList } from '@/common/constants/socialMediaList';
import SocialMedia from '@/sections/homePage/MaewTunFamilyIntro/SocialMedia/SocialMedia';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { t } from 'i18next';

describe('SocialMedia Component', () => {
  test('renders correctly with social media items', () => {
    const { getByText, getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <SocialMedia />
      </ThemeProvider>
    );

    // NOTE: Check if the title is rendered
    const title = getByText(t('letsGetSocial'));
    expect(title).toBeInTheDocument();

    // NOTE: Check if the correct number of social media items are rendered
    const socialMediaItems = getAllByTestId('social-media-item');
    expect(socialMediaItems.length).toBe(socialMediaList.length);

    // NOTE: Check if each social media item contains the correct information
    socialMediaList.forEach((item, index) => {
      const socialMediaItem = socialMediaItems[index];
      expect(socialMediaItem).toHaveTextContent(item.platformName);
      expect(socialMediaItem.querySelectorAll('img')[1]).toHaveAttribute(
        'src',
        expect.stringContaining(item.iconPath.split('/')[2])
        /* NOTE: Next.js optimizes images with its built-in next/image component, 
        which transforms the image URLs to include optimization parameters. This transformation 
        changes the src attribute to something like http://localhost/_next/image?url=%2Fassets%2Ficons%2Ffacebook-icon.png&w=256&q=75.
        So we only check if image name (last url path) is containing in the src
        */
      );
      expect(socialMediaItem.querySelectorAll('img')[1]).toHaveAttribute('alt', item.altValue);
      expect(socialMediaItem.querySelector('div[data-testid*="social-media-item-frame"]')).toHaveStyle(
        `border: 8px ridge ${item.borderColor}`
      );
      expect(socialMediaItem).toHaveAttribute('href', item.profileUrl);
    });
  });
});
