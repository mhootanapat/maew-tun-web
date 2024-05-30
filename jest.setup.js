// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import nextConfig from '@/../next.config';
import '@testing-library/jest-dom/extend-expect';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import { setConfig } from 'next/config';

require('@/utils/i18n');
dayjs.locale('th');
setConfig(nextConfig);
