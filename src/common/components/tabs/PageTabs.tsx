import { pageTabInfoList } from '@/common/constants/pageTabList';
import { IPageTabs } from '@/common/types/common/components/tabs/PageTabs';
import { Tab, Tabs } from '@mui/material';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';

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
    <Tabs value={activeTab} variant="scrollable" scrollButtons="auto" sx={{ ...sxProps }}>
      {pageTabInfoList.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.title}
          value={tab.value}
          onClick={() => {
            router.push(tab.value);
          }}
        />
      ))}
    </Tabs>
  );
};

export default memo(PageTabs);
