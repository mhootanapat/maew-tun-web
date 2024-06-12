import { ICatImageFrame } from '@/common/types/sections/CatImageFrame'; // Adjust the import path
import CatImageFrame from '@/sections/homePage/MaewTunFamilyIntro/CatImageFrame';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import { act, render, waitFor } from '@testing-library/react';

describe('CatImageFrame', () => {
  const defaultProps: ICatImageFrame = {
    item: {
      catName: 'Whiskers',
      catImgUrl: '/path/to/cat/image.jpg',
      catBirthDate: '2022-01-01',
      skeletonBoxProps: {},
    },
    pageLoading: false,
  };

  it('renders the skeleton while loading', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CatImageFrame {...defaultProps} pageLoading={true} />
      </ThemeProvider>
    );

    const skeleton = getByTestId('cat-frame-skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders the cat image and name after loading', async () => {
    const { getByAltText, getByText } = render(
      <ThemeProvider theme={theme}>
        <CatImageFrame {...defaultProps} />
      </ThemeProvider>
    );

    // Simulate image load
    const img = getByAltText('cat img');
    act(() => {
      img.onload = null; // clear the default onload handler
      img.dispatchEvent(new Event('load'));
    });

    await waitFor(() => {
      expect(getByText('Whiskers')).toBeInTheDocument();
    });

    expect(getByAltText('cat img')).toBeVisible();
    expect(getByText('2022-01-01')).toBeVisible();
  });

  it('applies correct styles on hover', async () => {
    const { getByAltText, getByText } = render(
      <ThemeProvider theme={theme}>
        <CatImageFrame {...defaultProps} />
      </ThemeProvider>
    );

    // Simulate image load
    const img = getByAltText('cat img');
    act(() => {
      img.onload = null; // clear the default onload handler
      img.dispatchEvent(new Event('load'));
    });

    await waitFor(() => {
      expect(getByText('Whiskers')).toBeInTheDocument();
    });

    // Apply hover styles by setting CSS class
    const wrapper = img.parentElement as HTMLElement;
    wrapper.classList.add('hover');

    expect(wrapper.querySelector('.cat-image')).toHaveStyle('box-shadow: 1px 1px 10px 0 rgba(0,0,0,1)');
    expect(wrapper.querySelector('.glow')).toHaveStyle('transform: rotate(45deg) translate(450%, 0)');
    expect(wrapper.querySelector('.cat-name')).toHaveStyle('margin-top: 80%');
  });
});
