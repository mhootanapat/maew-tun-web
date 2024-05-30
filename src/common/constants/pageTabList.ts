import { MAIN_URL } from '@/common/constants/url';
import { ITab } from '@/common/types/shared/tab';
import { t } from 'i18next';

// TODO: update to actual page
export const pageTabInfoList: ITab[] = [
  { title: t('homePageTitle'), value: MAIN_URL.home.main, disabled: false },
  { title: t('page1Title'), value: MAIN_URL.page1.main, disabled: false },
  { title: t('page2Title'), value: MAIN_URL.page2.main, disabled: false },
];
