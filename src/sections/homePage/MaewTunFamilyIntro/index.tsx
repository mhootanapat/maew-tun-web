import { homePageCatImageList } from '@/common/constants/homePageCatImageList';
import { MAEW_TUN_INTRO_CARD_SPACING } from '@/common/constants/screen';
import { IMaewTunFamilyIntro } from '@/common/types/sections/MaewTunFamilyIntro';
import CatImageFrame from '@/sections/homePage/MaewTunFamilyIntro/CatImageFrame';
import CatVideo from '@/sections/homePage/MaewTunFamilyIntro/CatVideo';
import LineContact from '@/sections/homePage/MaewTunFamilyIntro/LineContact';
import MaewTunPageName from '@/sections/homePage/MaewTunFamilyIntro/MaewTunPageName';
import SocialMedia from '@/sections/homePage/MaewTunFamilyIntro/SocialMedia/SocialMedia';
import { Stack } from '@mui/material';
import { memo } from 'react';

const MaewTunFamilyIntro = ({ loading: pageLoading }: IMaewTunFamilyIntro) => (
  <Stack
    direction="row"
    mx={MAEW_TUN_INTRO_CARD_SPACING}
    mt={MAEW_TUN_INTRO_CARD_SPACING - 2}
    mb={MAEW_TUN_INTRO_CARD_SPACING}
    flexWrap="wrap"
    gap={MAEW_TUN_INTRO_CARD_SPACING}
  >
    <Stack spacing={MAEW_TUN_INTRO_CARD_SPACING} flex={1}>
      <MaewTunPageName pageLoading={pageLoading} />
      <SocialMedia pageLoading={pageLoading} />
      <LineContact pageLoading={pageLoading} />
    </Stack>

    <Stack flex={1}>
      <Stack position="relative" direction="row" mb={MAEW_TUN_INTRO_CARD_SPACING} spacing={MAEW_TUN_INTRO_CARD_SPACING}>
        {homePageCatImageList.map((cat) => (
          <CatImageFrame key={cat.catName} item={cat} pageLoading={pageLoading} />
        ))}
      </Stack>
      <CatVideo pageLoading={pageLoading} />
    </Stack>
  </Stack>
);

export default memo(MaewTunFamilyIntro);
