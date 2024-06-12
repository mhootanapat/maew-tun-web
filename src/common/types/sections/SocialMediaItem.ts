import { ISocialMediaItemConfig } from '@/common/constants/socialMediaList';

export interface ISocialMediaItem {
  item: ISocialMediaItemConfig;
  onImageLoaded: () => void;
}
