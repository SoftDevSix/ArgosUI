import React, { useState } from "react";
import RulesTabs from "./RulesTabs";
import { Rules, RulesTypes } from "../../../types/types";
import { Card, CardContent, Divider, IconButton } from "@mui/material";
import RuleConfiguration from "./RuleConfiguration";
import { ruleDefaults, rulesTypes } from "../../../utils/rulesConstants";
import { ChevronLeft } from "@mui/icons-material";
import GeneralRulesConfiguration from "./GeneralRulesConfiguration/GeneralRulesConfiguration";

const ProjectRules: React.FC = () => {
  const [ruleTab, setRuleTab] = useState<RulesTypes | null>(null);

  const [allRules, setAllRules] = useState<Record<RulesTypes, Rules>>(() =>
    rulesTypes.reduce(
      (acc, type) => {
        acc[type] = { ...ruleDefaults[type] };
        return acc;
      },
      {} as Record<RulesTypes, Rules>
    )
  );

  const handleRuleChange = (type: RulesTypes, updatedRules: Rules) => {
    setAllRules({ ...allRules, [type]: updatedRules });
  };

  return (
    <div>
      {ruleTab === null ? (
        <RulesTabs setRuleTab={setRuleTab} />
      ) : ruleTab === "rules" ? (
        <GeneralRulesConfiguration />
      ) : (
        <Card>
          <CardContent>
            <IconButton
              onClick={() => {
                setRuleTab(null);
              }}
            >
              <ChevronLeft />
            </IconButton>
            <RuleConfiguration
              rules={allRules[ruleTab]}
              onChange={(updatedRules) =>
                handleRuleChange(ruleTab, updatedRules)
              }
            />
            <Divider style={{ margin: "20px 0" }} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProjectRules;
