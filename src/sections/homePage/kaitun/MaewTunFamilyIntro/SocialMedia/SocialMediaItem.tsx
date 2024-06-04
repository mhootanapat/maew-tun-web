/* eslint-disable no-console */
import Button3D from '@/common/components/button/Button3D';
import { Stack } from '@mui/material';
import { memo } from 'react';

const SocialMediaItem = () => (
  <Stack>
    <Button3D text="ไข่ตุ๋น" onClick={() => console.log('clicked')} />
  </Stack>
);

export default memo(SocialMediaItem);
