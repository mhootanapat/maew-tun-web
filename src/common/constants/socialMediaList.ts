import { t } from 'i18next';

export interface ISocialMediaItemConfig {
  platformName: string;
  iconPath: string;
  altValue: string;
  borderColor: string;
  profileUrl: string;
}

export const socialMediaList: ISocialMediaItemConfig[] = [
  {
    platformName: t('facebook'),
    altValue: 'Facebook logo',
    iconPath: '/assets/icons/facebook-icon.png',
    borderColor: '#587AD6',
    profileUrl: 'https://www.facebook.com/maewtunreview',
  },
  {
    platformName: t('instagram'),
    altValue: 'Instagram logo',
    iconPath: '/assets/icons/instagram-icon.png',
    borderColor: '#FF379B',
    profileUrl: 'https://www.instagram.com/maew.tun?igsh=MXNpN3czZW1iaG12ag==',
  },
  {
    platformName: t('tiktok'),
    altValue: 'TikTok logo',
    iconPath: '/assets/icons/tiktok-logo.png',
    borderColor: '#868686',
    profileUrl: 'https://www.tiktok.com/@maew.tun',
  },
];

export const lineAddFriendUrl = 'https://line.me/ti/p/lRtO_r6aww';
