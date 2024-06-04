import { ISocialMediaItem } from '@/common/types/sections/SocialMediaItem';
import { t } from 'i18next';

export const socialMediaList: ISocialMediaItem[] = [
  {
    platformName: t('facebook'),
    altValue: 'Facebook logo',
    iconPath: '/assets/icons/facebook-icon.png',
  },
  {
    platformName: t('instagram'),
    altValue: 'Instagram logo',
    iconPath: '/assets/icons/instagram-icon.png',
  },
  {
    platformName: t('tiktok'),
    altValue: 'TikTok logo',
    iconPath: '/assets/icons/tiktok-logo.png',
  },
];
