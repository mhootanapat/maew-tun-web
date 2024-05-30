import { IToDateTimeString } from '@/common/types/utils/date';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import i18next from 'i18next';

dayjs.extend(buddhistEra);

export const toDateTimeString = (param?: IToDateTimeString) => {
  const { date, options = {}, locale = i18next.language } = param ?? {};
  const { showTime = true, showSecond = false } = options;
  let thFormat = 'DD MMM BBBB';
  let enFormat = 'DD MMM YYYY';

  if (showTime) {
    thFormat = showSecond ? 'DD MMM BBBB - HH:mm:ss' : 'DD MMM BBBB - HH:mm';
    enFormat = showSecond ? 'DD MMM YYYY - HH:mm:ss' : 'DD MMM YYYY - HH:mm';
  }

  dayjs.locale(locale);

  return dayjs(date).format(locale === 'en' ? enFormat : thFormat);
};

export default dayjs;
