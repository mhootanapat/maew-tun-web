import { pageTabInfoList } from '@/common/constants/pageTabList';
import { IPageTabs } from '@/common/types/common/components/tabs/PageTabs';
import { Tab, TabProps, Tabs, TabsProps, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { ReactNode, memo, useMemo } from 'react';

//#region Tab Wrapper
interface StyledTabsProps extends TabsProps {
  children: ReactNode;
  value: string;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: theme.palette.colors.yellow_dark,
  },
}));
//#endregion Tab Wrapper

//#region Tab Modified
const StyledTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightBold,
  marginRight: theme.spacing(1),
  color: theme.palette.text.primary,

  '&:hover': {
    color: theme.palette.colors.orange,
    opacity: 1,
  },

  '&.Mui-selected': {
    color: theme.palette.colors.orange_light,
    fontWeight: theme.typography.fontWeightMedium,
  },

  '&.MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  '&.MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: theme.palette.colors.yellow_dark,
  },
}));
//#endregion Tab Modified

const PageTabs = ({ isLoading, sxProps }: IPageTabs) => {
  const router = useRouter();

  const activeTab = useMemo(
    () => pageTabInfoList.find((tab) => router.asPath === tab.value)?.value ?? pageTabInfoList[0].value,
    [router.asPath]
  );

  if (isLoading) {
    // TODO: add skeleton when state is available
    return null;
  }
  return (
    <StyledTabs value={activeTab} variant="scrollable" scrollButtons="auto" sx={{ ...sxProps }}>
      {pageTabInfoList.map((tab) => (
        <StyledTab
          key={tab.value}
          label={tab.title}
          value={tab.value}
          onClick={() => {
            router.push(tab.value);
          }}
        />
      ))}
    </StyledTabs>
  );
};

export default memo(PageTabs);
