import { Box, Typography, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const HeadlineWrapper = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// TODO: Refactor when have page design
const KaiTunHeadline = () => {
  const { t } = useTranslation();
  return (
    <HeadlineWrapper>
      <Typography
        variant="heading-bold-xl"
        fontWeight={100}
        fontSize="10vw"
        color={(theme) => theme.palette.text.white}
      >
        {t('kaiTunName')}
      </Typography>
    </HeadlineWrapper>
  );
};
export default memo(KaiTunHeadline);
