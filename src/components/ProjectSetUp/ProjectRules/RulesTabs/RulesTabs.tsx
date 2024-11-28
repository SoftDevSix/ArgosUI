import React from "react";
import { RulesTypes } from "../../../../types/types";
import { Box, Card, CardContent } from "@mui/material";
import ChevronTab from "../../../Tabs/ChevronTab";
import styles from "./rulestabs.module.css";
import { rulesTypes } from "../../../../utils/rulesConstants";

interface RulesTabsProps {
  setRuleTab: React.Dispatch<React.SetStateAction<RulesTypes | null>>;
}

const RulesTabs: React.FC<RulesTabsProps> = ({ setRuleTab }) => (
  <Card>
    <CardContent>
      {rulesTypes.map((rule) => (
        <Box className={styles.tabContainer} key={rule} mt={1}>
          <ChevronTab tabName={`${rule}`} onClick={() => setRuleTab(rule)} />
        </Box>
      ))}
    </CardContent>
  </Card>
);

export default RulesTabs;
