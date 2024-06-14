import { StyledMenu, StyledMenuItem } from '@/common/components/menu/StyledMenu';
import LOCAL_STORAGE_KEY from '@/common/constants/localStorageKey';
import { ISupportedLanguage, SUPPORTED_LANGUAGES } from '@/common/constants/supportLanguages';
import { ILanguageMenu } from '@/common/types/common/components/menu/LanguageMenu';
import { List, ListItemButton, ListItemText, Stack, Typography, styled } from '@mui/material';
import { MouseEvent, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const StyledListButton = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.colors.orange,
  },
}));

const LanguageMenu = (_props: ILanguageMenu) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<ISupportedLanguage>(SUPPORTED_LANGUAGES[0]);

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuItemClick = useCallback(
    (item: ISupportedLanguage) => {
      setSelectedItem(item);
      i18n.changeLanguage(item.value);
      localStorage.setItem(LOCAL_STORAGE_KEY.lang, item.value);
      setAnchorEl(null);
    },
    [i18n]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  useEffect(() => {
    setSelectedItem(SUPPORTED_LANGUAGES.find((item) => item.value === i18n.language) ?? SUPPORTED_LANGUAGES[0]);
  }, [i18n.language]);

  return (
    <>
      <List>
        <StyledListButton test-dataid="language-menu-button" onClick={handleClick} disableRipple>
          <ListItemText primary={selectedItem.icon} />
        </StyledListButton>
      </List>
      <StyledMenu test-dataid="language-menu" anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {SUPPORTED_LANGUAGES.map((item) => {
          const isSelected = item.value === selectedItem.value;
          return (
            <StyledMenuItem
              className={isSelected ? 'Mui-selected' : undefined}
              test-dataid="language-menu-item"
              key={item.value}
              selected={item.value === selectedItem.value}
              onClick={() => handleMenuItemClick(item)}
            >
              <Stack direction="row" spacing={1}>
                {item.icon}
                <Typography> {item.title}</Typography>
              </Stack>
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
};

export default memo(LanguageMenu);
