import { ISocialMediaItem } from '@/common/types/sections/SocialMediaItem';
import { t } from 'i18next';

export const socialMediaList: ISocialMediaItem[] = [
  {
    platformName: t('facebook'),
    altValue: 'Facebook logo',
    iconPath: '/assets/icons/facebook-icon.png',
    borderColor: '#587AD6',
  },
  {
    platformName: t('instagram'),
    altValue: 'Instagram logo',
    iconPath: '/assets/icons/instagram-icon.png',
    borderColor: '#FF379B',
  },
  {
    platformName: t('tiktok'),
    altValue: 'TikTok logo',
    iconPath: '/assets/icons/tiktok-logo.png',
    borderColor: '#868686',
  },
];
