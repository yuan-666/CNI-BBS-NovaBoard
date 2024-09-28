"use client";

import { Tab, Tabs } from "@nextui-org/tabs";

export const TopBar = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full md:w-full">
      <div className="overflow-x-auto hide-scrollbar whitespace-nowrap">
        <Tabs
          key="primary"
          aria-label="Tabs colors"
          className="gap-1 flex"
          color="primary"
          radius="full"
        >
          <Tab key="excellent" title="精选" />
          <Tab key="photo" title="图文" />
          <Tab key="new" title="最新" />
          <Tab key="hot" title="最热" />
          <Tab key="following" title="正在关注" />
          <Tab key="xlog" title="xLog" />
          <Tab key="web3" title="Web3" />
          <Tab key="ai" title="AI" />
          <Tab key="note" title="日记" />
          <Tab key="novel" title="小说" />
          <Tab key="code" title="编程" />
          <Tab key="videos" title="播客" />
        </Tabs>
      </div>
    </div>
  );
};
