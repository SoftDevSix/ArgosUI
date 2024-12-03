import React from "react";
import { RulesTypes } from "../../../../types/types";
import { Box, Card, CardContent } from "@mui/material";
import ChevronTab from "../../../Tabs/ChevronTab";
import styles from "./rulestabs.module.css";
import { rulesTypes } from "../../../../utils/rulesConstants";
import SettingsIcon from "@mui/icons-material/Settings";

interface RulesTabsProps {
    setRuleTab: React.Dispatch<React.SetStateAction<RulesTypes | null>>;
}

const RulesTabs: React.FC<RulesTabsProps> = ({ setRuleTab }) => (
    <Card>
        <CardContent>
            {rulesTypes.map((rule) => (
                <Box className={styles.tabContainer} key={rule} mt={1}>
                    <ChevronTab
                        tabName={`${rule} Rules`}
                        onClick={() => setRuleTab(rule)}
                        IconComponent={SettingsIcon}
                    />
                </Box>
            ))}
        </CardContent>
    </Card>
);

export default RulesTabs;
