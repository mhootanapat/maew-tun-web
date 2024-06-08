import { ICatImageFrame } from '@/common/types/sections/CatImageFrame';
import { t } from 'i18next';

export const homePageCatImageList: ICatImageFrame[] = [
  {
    catName: t('kaiTunName'),
    catImgUrl: '/apple-touch-icon.png', // TODO: Update to real img
    catBirthDate: '2022-01-18',
  },
  {
    catName: t('kaiKhemName'),
    catImgUrl: '/apple-touch-icon.png', // TODO: Update to real img
    catBirthDate: '2024-01-21',
  },
];
