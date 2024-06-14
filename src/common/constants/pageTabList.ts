import { MAIN_URL } from '@/common/constants/url';
import { ITab } from '@/common/types/shared/tab';

// TODO: update to actual page
export const pageTabInfoList: ITab[] = [
  {
    title: 'homePageTitle', // NOTE: locale key
    value: MAIN_URL.home.main,
    disabled: false,
  },
  {
    title: 'page1Title', // NOTE: locale key
    value: MAIN_URL.page1.main,
    disabled: true,
  },
  {
    title: 'page2Title', // NOTE: locale key
    value: MAIN_URL.page2.main,
    disabled: true,
  },
];
