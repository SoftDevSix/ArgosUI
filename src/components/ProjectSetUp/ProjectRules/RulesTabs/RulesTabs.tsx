import React from "react";
import { RulesTypes } from "../../../../types/types";
import { Box, Card, CardContent } from "@mui/material";
import ChevronTab from "../../../Tabs/ChevronTab";
import styles from "./rulestabs.module.css";

interface RulesTabsProps {
  setRuleTab: React.Dispatch<React.SetStateAction<RulesTypes | null>>;
}

const RulesTabs: React.FC<RulesTabsProps> = ({ setRuleTab }) => {
  const tabs: RulesTypes[] = [
    "coverage",
    "best analysis",
    "code smells",
    "code complexity",
  ];
  return (
    <Card>
      <CardContent className={styles.cardContent}>
        {tabs.map((tab) => (
          <Box className={styles.tabContainer} key={tab} mt={1}>
            <ChevronTab tabName={tab} onClick={() => setRuleTab(tab)} />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RulesTabs;
