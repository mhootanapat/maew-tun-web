/* eslint-disable sonarjs/no-duplicate-string */
import { toDateTimeString } from '@/utils/date';

jest.useFakeTimers().setSystemTime(new Date('2024-05-30T11:52:00+07:00'));

describe('date format', () => {
  describe('toDateTimeString', () => {
    const date1 = '2023-07-31T23:17:00+07:00';
    const date2 = '2023-07-01T12:17:00+07:00';
    const date3 = '2023-12-12T00:12:12+07:00';

    describe('given undefined locale, should be default locale (th)', () => {
      test('given undefined date, should be `30 พ.ค. 2567 - 11:52`', () => {
        expect(toDateTimeString()).toEqual('30 พ.ค. 2567 - 11:52');
      });
      test('given 2023-07-31T00:17:00+07:00, should be `31 ก.ค. 2566 - 23:17`', () => {
        expect(toDateTimeString({ date: date1 })).toEqual('31 ก.ค. 2566 - 23:17');
      });
      test('given 2023-07-01T00:17:00+07:00, should be `1 ก.ค. 2566 - 12:17`', () => {
        expect(toDateTimeString({ date: date2 })).toEqual('01 ก.ค. 2566 - 12:17');
      });
      test('given 2023-07-01T00:17:00+07:00, should be `12 ธ.ค. 2566 - 00:12`', () => {
        expect(toDateTimeString({ date: date3 })).toEqual('12 ธ.ค. 2566 - 00:12');
      });
      test('showTime = false', () => {
        expect(toDateTimeString({ date: date3, options: { showTime: false } })).toEqual('12 ธ.ค. 2566');
      });
      test('showSecond = true', () => {
        expect(toDateTimeString({ date: date3, options: { showSecond: true } })).toEqual('12 ธ.ค. 2566 - 00:12:12');
      });
    });
    describe('given `th` locale, should be format with Thai format', () => {
      const thLang = 'th';

      test('given undefined date, should be `30 พ.ค. 2567 - 11:52`', () => {
        expect(toDateTimeString({ locale: thLang })).toEqual('30 พ.ค. 2567 - 11:52');
      });
      test('given 2023-07-31T00:17:00+07:00, should be `31 ก.ค. 2566 - 23:17`', () => {
        expect(toDateTimeString({ date: date1, locale: thLang })).toEqual('31 ก.ค. 2566 - 23:17');
      });
      test('given 2023-07-01T00:17:00+07:00, should be `1 ก.ค. 2566 - 12:17`', () => {
        expect(toDateTimeString({ date: date2, locale: thLang })).toEqual('01 ก.ค. 2566 - 12:17');
      });
      test('given 2023-07-01T00:17:00+07:00, should be `12 ธ.ค. 2566 - 00:12`', () => {
        expect(toDateTimeString({ date: date3, locale: thLang })).toEqual('12 ธ.ค. 2566 - 00:12');
      });
      test('showTime = false', () => {
        expect(toDateTimeString({ date: date3, locale: thLang, options: { showTime: false } })).toEqual('12 ธ.ค. 2566');
      });
      test('showSecond = true', () => {
        expect(toDateTimeString({ date: date3, locale: thLang, options: { showSecond: true } })).toEqual(
          '12 ธ.ค. 2566 - 00:12:12'
        );
      });
    });
    describe('given `en` locale, should be format with English format', () => {
      const enLang = 'en';

      test('given undefined date, should be `30 May 2024 - 11:52`', () => {
        expect(toDateTimeString({ locale: enLang })).toEqual('30 May 2024 - 11:52');
      });
      test('given 2023-07-31T00:17:00+07:00, should be `31 Jul 2023 - 23:17`', () => {
        expect(toDateTimeString({ date: date1, locale: enLang })).toEqual('31 Jul 2023 - 23:17');
      });
      test('given 2023-07-31T00:17:00+07:00, should be `1 Jul 2023 - 12:17`', () => {
        expect(toDateTimeString({ date: date2, locale: enLang })).toEqual('01 Jul 2023 - 12:17');
      });
      test('given 2023-07-01T00:17:00+07:00, should be `12 Dec 2023 - 00:12`', () => {
        expect(toDateTimeString({ date: date3, locale: enLang })).toEqual('12 Dec 2023 - 00:12');
      });
      test('showTime = false', () => {
        expect(toDateTimeString({ date: date3, locale: enLang, options: { showTime: false } })).toEqual('12 Dec 2023');
      });
      test('showSecond = true', () => {
        expect(toDateTimeString({ date: date3, locale: enLang, options: { showSecond: true } })).toEqual(
          '12 Dec 2023 - 00:12:12'
        );
      });
    });
  });
});
