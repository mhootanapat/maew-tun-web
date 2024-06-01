/* eslint-disable jsx-a11y/alt-text */
import ImageWithFallback from '@/common/components/ImageWithFallback';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ImageProps } from 'next/image';
import { ImgHTMLAttributes } from 'react';

jest.mock('next/image', () => (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />);

describe('ImageWithFallback', () => {
  const defaultProps: ImageProps = {
    src: 'test-image.jpg',
    alt: 'test image',
    width: 100,
    height: 100,
  };

  it('should render the image when src is provided and no error occurs', () => {
    const { getByAltText } = render(<ImageWithFallback {...defaultProps} />);
    const image = getByAltText('test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('should render the placeholder when src is not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ImageWithFallback {...defaultProps} src="" />
      </ThemeProvider>
    );
    const placeholder = getByTestId('fallback-placeholder-image');
    expect(placeholder).toBeInTheDocument();
  });

  it('should render the placeholder when an error occurs', () => {
    const { getByTestId, getByAltText } = render(
      <ThemeProvider theme={theme}>
        <ImageWithFallback {...defaultProps} />
      </ThemeProvider>
    );
    const image = getByAltText('test image');
    fireEvent.error(image);
    const placeholder = getByTestId('fallback-placeholder-image');
    expect(placeholder).toBeInTheDocument();
  });
});
