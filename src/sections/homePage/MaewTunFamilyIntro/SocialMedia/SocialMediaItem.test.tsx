import { ISocialMediaItemConfig } from '@/common/constants/socialMediaList';
import SocialMediaItem from '@/sections/homePage/MaewTunFamilyIntro/SocialMedia/SocialMediaItem';
import { render } from '@testing-library/react';
import { ImgHTMLAttributes } from 'react';

jest.mock('@/common/components/ImageWithFallback', () => (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const { src, alt, ...rest } = props;
  return <img src={src} alt={alt} {...rest} />;
});

const mockOnLoadImage = jest.fn();

const mockItem: ISocialMediaItemConfig = {
  iconPath: '/path/to/icon.png',
  altValue: 'Icon Alt Text',
  platformName: 'Platform Name',
  borderColor: 'blue',
  profileUrl: 'https://profile.url',
};

describe('SocialMediaItem Component', () => {
  test('renders correctly with given props', () => {
    const { getByText, getByRole, getAllByAltText } = render(
      <SocialMediaItem item={mockItem} onImageLoaded={mockOnLoadImage} />
    );

    // NOTE: Check if the platform name is rendered
    const platformName = getByText(mockItem.platformName);
    expect(platformName).toBeInTheDocument();

    // NOTE: Check if the profile URL is set correctly
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', mockItem.profileUrl);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    // NOTE: Check if the icon is rendered
    const icons = getAllByAltText('Icon Alt Text');
    expect(icons).toHaveLength(1);
    expect(icons[0]).toHaveAttribute('src', mockItem.iconPath);
  });

  test('applies styles correctly', () => {
    const { container } = render(<SocialMediaItem {...mockItem} item={mockItem} onImageLoaded={mockOnLoadImage} />);

    // NOTE: Check if the image has correct styles
    const img = container.querySelector('img');
    expect(img).toHaveStyle('border-radius: 50%');
    expect(img).toHaveStyle('box-shadow: 0px 4px 13px 5px rgba(172, 172, 172, 0.5)');

    // NOTE: Check if the StyledCircleFrame has the correct border color
    const circleFrame = container.querySelector('div[data-testid*="social-media-item-frame"]');
    expect(circleFrame).toHaveStyle(`border: 8px ridge ${mockItem.borderColor}`);
  });
});
