import { StyledMenu, StyledMenuItem } from '@/common/components/menu/StyledMenu';
import { pageTabInfoList } from '@/common/constants/pageTabList';
import { IPageMenu } from '@/common/types/common/components/menu/PageMenu';
import { Box, Button, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { MouseEvent, memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

//#region StyledButton
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 900,
  color: theme.palette.colors.orange_light,

  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.colors.orange,
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    height: theme.spacing(0.25),
    width: '100%',
    maxWidth: 40,
    background: theme.palette.colors.orange,
    marginBottom: theme.spacing(-0.75),
  },
}));
//#endregion StyledButton

const PageMenu = ({ boxProps }: IPageMenu) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { value, title } = useMemo(
    () => pageTabInfoList.find((tab) => router.asPath === tab.value) ?? pageTabInfoList[0],
    [router.asPath]
  );
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Box {...boxProps} data-testid="page-menu-container">
      <StyledButton onClick={handleClick} disableRipple>
        {t(title)}
      </StyledButton>
      <StyledMenu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {pageTabInfoList.map((tab) => {
          const isSelected = value === tab.value;
          return (
            <StyledMenuItem
              className={isSelected ? 'Mui-selected' : undefined}
              key={tab.value}
              onClick={() => {
                handleClose();
                router.push(tab.value);
              }}
              disabled={tab.disabled}
            >
              {t(tab.title)}
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </Box>
  );
};

export default memo(PageMenu);
