import { MAEW_TUN_INTRO_CARD_SPACING } from '@/common/constants/screen';
import { toDateTimeString } from '@/utils/date';
import { BoxProps } from '@mui/material';
import i18next from 'i18next';

export interface ICatImageFrameConfig {
  catName: string;
  catImgUrl: string;
  catBirthDate: string;
  skeletonBoxProps?: BoxProps;
}
export const homePageCatImageList: ICatImageFrameConfig[] = [
  {
    catName: i18next.t('kaiTunName'),
    catImgUrl: '/assets/images/kaitun.jpg',
    catBirthDate: toDateTimeString({ date: '2022-01-18', locale: i18next.language, options: { showTime: false } }),
    skeletonBoxProps: { width: '50%' },
  },
  {
    catName: i18next.t('kaiKhemName'),
    catImgUrl: '/assets/images/kaikhem.jpg',
    catBirthDate: toDateTimeString({ date: '2024-01-21', locale: i18next.language, options: { showTime: false } }),
    skeletonBoxProps: { right: -20, width: '50%', pr: MAEW_TUN_INTRO_CARD_SPACING },
  },
];
