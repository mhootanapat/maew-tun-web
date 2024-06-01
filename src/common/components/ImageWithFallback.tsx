import PlaceholderImage from '@/common/components/icons/PlaceholderImage';
import { IImageWithFallback } from '@/common/types/common/components/ImageWithFallback';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageWithFallback = (props: IImageWithFallback) => {
  const { src, alt, placeholderProps, ...restProps } = props;
  const { iconSize = 'small', borderRadius = 1 } = placeholderProps || {};
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [src]);

  if (isError || !src) {
    return (
      <Box
        sx={{
          width: props.width,
          height: props.height,
          background: (theme) => theme.palette.colors.grey[200],
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flex: '0 0 auto',
          borderRadius: (theme) => theme.spacing(borderRadius),
        }}
      >
        <PlaceholderImage
          data-testid="fallback-placeholder-image"
          boxProps={{ alignItems: 'center' }}
          sx={{ color: (theme) => theme.palette.colors.grey[400] }}
          fontSize={iconSize}
        />
      </Box>
    );
  }

  return <Image onError={() => setIsError(true)} alt={alt} src={src} {...restProps} />;
};

// NOTE: cannot use memo because it will no rerender
export default ImageWithFallback;
