import { ICatImageFrame } from '@/common/types/sections/CatImageFrame';
import { toDateTimeString } from '@/utils/date';
import i18next from 'i18next';

export const homePageCatImageList: ICatImageFrame[] = [
  {
    catName: i18next.t('kaiTunName'),
    catImgUrl: '/assets/images/kaitun.jpg',
    catBirthDate: toDateTimeString({ date: '2022-01-18', locale: i18next.language, options: { showTime: false } }),
  },
  {
    catName: i18next.t('kaiKhemName'),
    catImgUrl: '/assets/images/kaikhem.jpg',
    catBirthDate: toDateTimeString({ date: '2024-01-21', locale: i18next.language, options: { showTime: false } }),
  },
];
