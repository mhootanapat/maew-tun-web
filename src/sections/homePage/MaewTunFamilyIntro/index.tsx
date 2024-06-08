import { StyledCardBlur } from '@/common/components/CardBlur';
import { homePageCatImageList } from '@/common/constants/homePageCatImageList';
import useVideoPlayer from '@/common/hooks/useVideoPlayer';
import CatImageFrame from '@/sections/homePage/MaewTunFamilyIntro/CatImageFrame';
import LineContact from '@/sections/homePage/MaewTunFamilyIntro/LineContact';
import SocialMedia from '@/sections/homePage/MaewTunFamilyIntro/SocialMedia/SocialMedia';
import { Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const MAEW_TUN_INTRO_CARD_SPACING = 3;

//#region Page Name Styled
const StyledPageNameWrapper = styled(StyledCardBlur)(() => ({
  maxHeight: '250px',
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `radial-gradient(circle at bottom ,rgba(255, 231, 122, 0.5), 
    rgba(255, 231, 122, 0.5) 10%,transparent 10%, transparent 20%, 
    rgba(255, 231, 122, 0.5) 20%, rgba(255, 231, 122, 0.5) 30%, transparent 30%, transparent 40%, 
    rgba(255, 231, 122, 0.5) 40%, rgba(255, 231, 122, 0.5) 50%, transparent 50%, transparent 60%, 
    rgba(255, 231, 122, 0.5) 60%, rgba(255, 231, 122, 0.5) 70%, transparent 70%, transparent 80%, 
    rgba(255, 231, 122, 0.5) 80%, rgba(255, 231, 122, 0.5) 90%, transparent 90%) 0% 0% / 3em 3em #FFFFFF`,
  backgroundSize: '40px 40px',
}));

const StyledPageNameTypography = styled(Typography)(() => ({
  fontSize: '72px',
  fontWeight: 'bolder',
  '@media (max-width:515px)': {
    fontSize: '56px',
  },
  '@media (max-width:415px)': {
    fontSize: '32px',
  },
}));
//#endregion  Page Name Styled

//#region Video Styled
const StyledVideo = styled('video')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));

const StyledVideoWrapper = styled(StyledCardBlur)(() => ({
  padding: 0,
}));
//#endregion Video Styled

const MaewTunFamilyIntro = () => {
  const { t } = useTranslation();
  const { vdoElementRef, setFocus, onEndedLoop } = useVideoPlayer();

  return (
    <Stack
      direction="row"
      mx={MAEW_TUN_INTRO_CARD_SPACING}
      mt={MAEW_TUN_INTRO_CARD_SPACING - 2}
      mb={MAEW_TUN_INTRO_CARD_SPACING}
      flexWrap="wrap"
      gap={MAEW_TUN_INTRO_CARD_SPACING}
    >
      <Stack spacing={MAEW_TUN_INTRO_CARD_SPACING} flex={1}>
        {
          // #region Page Name
        }
        <StyledPageNameWrapper>
          <Stack alignItems="center" whiteSpace="nowrap">
            <StyledPageNameTypography>{t('webTitle')}</StyledPageNameTypography>
            <Typography variant="body-bold-md" color="text.primary">
              {t('greeting')}
            </Typography>
          </Stack>
        </StyledPageNameWrapper>
        {
          // #endregion Page Name
        }
        <SocialMedia />
        <LineContact />
      </Stack>

      <Stack flex={1}>
        <Stack direction="row" mb={MAEW_TUN_INTRO_CARD_SPACING} spacing={MAEW_TUN_INTRO_CARD_SPACING}>
          {homePageCatImageList.map((cat) => (
            <CatImageFrame
              key={cat.catName}
              catName={cat.catName}
              catBirthDate={cat.catBirthDate}
              catImgUrl={cat.catImgUrl}
            />
          ))}
        </Stack>

        {
          // #region Video
        }
        <StyledVideoWrapper>
          <StyledVideo
            ref={vdoElementRef}
            onMouseOver={() => setFocus(true)}
            onMouseOut={() => setFocus(false)}
            src="/assets/videos/tun-khem-profile-video.mp4"
            onEnded={onEndedLoop}
            autoPlay
            muted
          />
        </StyledVideoWrapper>
        {
          // #endregion Video
        }
      </Stack>
    </Stack>
  );
};

export default memo(MaewTunFamilyIntro);
