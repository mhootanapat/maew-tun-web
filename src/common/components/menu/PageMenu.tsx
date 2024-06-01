import { pageTabInfoList } from '@/common/constants/pageTabList';
import { IPageMenu } from '@/common/types/common/components/menu/PageMenu';
import { Box, Button, Menu, MenuItem, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { MouseEvent, memo, useCallback, useMemo, useState } from 'react';

//#region StyledButton
const StyledButton = styled(Button)(({ theme }) => ({
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
  },
}));
//#endregion StyledButton

//#region StyledMenu
const StyledMenu = styled(Menu)(({ theme }) => ({
  zIndex: 100000,
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.colors.brown_dark,
    shadows: theme.shadows[10],
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.colors.orange_opacity_005,
    color: theme.palette.colors.orange,
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.colors.orange_opacity_005,
    color: theme.palette.colors.orange_light,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
//#endregion StyledMenu

const PageMenu = ({ boxProps }: IPageMenu) => {
  const router = useRouter();
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
    <Box {...boxProps}>
      <StyledButton onClick={handleClick} disableRipple>
        {title}
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
                if (!isSelected) {
                  router.push(tab.value);
                }
              }}
              disabled={tab.disabled}
            >
              {tab.title}
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </Box>
  );
};

export default memo(PageMenu);
