import { Box } from "@chakra-ui/react";
import React from "react";
import BlockChainSection from "./BlockChainSection";
import DiscoverOppertunitiesSec from "./DiscoverOppertunitiesSec";
import DontMissOut from "./DontMissOut";
import FollowSmartMoney from "./FollowSmartMoney";
import HeroSection from "./HeroSection";
import StatisticSection from "./StatisticSection";
import SubscribeToSmartMoney from "./SubscribeToSmartMoney";
import TopAccounts from "./TopAccounts";

const FulletHome = () => {
  return (
    <Box bg="#04031A">
      <HeroSection />
      <DiscoverOppertunitiesSec />
      <TopAccounts />
      <FollowSmartMoney />
      <StatisticSection />
      <SubscribeToSmartMoney />
      <BlockChainSection />|
      <DontMissOut />
    </Box>
  );
};

export default FulletHome;
