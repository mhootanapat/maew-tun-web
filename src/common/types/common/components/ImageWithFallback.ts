import { SvgIconProps } from '@mui/material';
import { ImageProps } from 'next/image';

interface IPlaceholder {
  iconSize?: SvgIconProps['fontSize'];
  borderRadius?: number;
}

export interface IImageWithFallback extends ImageProps {
  placeholderProps?: IPlaceholder;
}
