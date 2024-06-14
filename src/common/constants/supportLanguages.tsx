import LanguageIcon from '@/common/components/icons/LanguageIcon';

export interface ISupportedLanguage {
  icon: JSX.Element;
  title: string;
  value: string;
}
export const SUPPORTED_LANGUAGES: ISupportedLanguage[] = [
  { icon: <LanguageIcon size={32} langTitle="กข" />, title: 'ภาษาไทย', value: 'th' },
  { icon: <LanguageIcon size={32} langTitle="EN" />, title: 'English', value: 'en' },
];
