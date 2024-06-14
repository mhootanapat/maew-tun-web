import { MAEW_TUN_INTRO_CARD_SPACING } from '@/common/constants/screen';
import { BoxProps } from '@mui/material';

export interface ICatImageFrameConfig {
  catName: string;
  catImgUrl: string;
  catBirthDate: string;
  skeletonBoxProps?: BoxProps;
}
export const homePageCatImageList: ICatImageFrameConfig[] = [
  {
    catName: 'kaiTunName', // NOTE: locale key
    catImgUrl: '/assets/images/kaitun.jpg',
    catBirthDate: '2022-01-18',
    skeletonBoxProps: { width: '50%' },
  },
  {
    catName: 'kaiKhemName', // NOTE: locale key
    catImgUrl: '/assets/images/kaikhem.jpg',
    catBirthDate: '2024-01-21',
    skeletonBoxProps: { right: -20, width: '50%', pr: MAEW_TUN_INTRO_CARD_SPACING },
  },
];
