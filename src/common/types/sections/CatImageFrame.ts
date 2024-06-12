import { BoxProps } from '@mui/material';

export interface ICatImageFrame {
  catName: string;
  catImgUrl: string;
  catBirthDate: string;
  skeletonBoxProps?: BoxProps;
}
