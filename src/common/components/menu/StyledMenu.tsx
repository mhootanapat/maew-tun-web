import { Menu, MenuItem, styled } from '@mui/material';

export const StyledMenu = styled(Menu)(({ theme }) => ({
  zIndex: 100000,
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.colors.brown_beige,
    color: theme.palette.colors.brown_dark,
    shadows: theme.shadows[10],
    borderRadius: theme.spacing(3),
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontWeight: 900,
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
