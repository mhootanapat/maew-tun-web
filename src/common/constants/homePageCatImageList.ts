import { ICatImageFrame } from '@/common/types/sections/CatImageFrame';
import { toDateTimeString } from '@/utils/date';
import i18next from 'i18next';

export const homePageCatImageList: ICatImageFrame[] = [
  {
    catName: i18next.t('kaiTunName'),
    catImgUrl: '/apple-touch-icon.png', // TODO: Update to real img
    catBirthDate: toDateTimeString({ date: '2022-01-18', locale: i18next.language, options: { showTime: false } }),
  },
  {
    catName: i18next.t('kaiKhemName'),
    catImgUrl: '/apple-touch-icon.png', // TODO: Update to real img
    catBirthDate: toDateTimeString({ date: '2024-01-21', locale: i18next.language, options: { showTime: false } }),
  },
];
