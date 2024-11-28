import React, { useState } from "react";
import RulesTabs from "./RulesTabs";
import { Rules, RulesTypes } from "../../../types/types";
import { ruleDefaults, rulesTypes } from "../../../utils/rulesConstants";
import GeneralRulesConfiguration from "./GeneralRulesConfiguration";

const ProjectRules: React.FC = () => {
  const [ruleTab, setRuleTab] = useState<RulesTypes | null>(null);

  const [rulesConfig, setRulesConfig] = useState<Record<RulesTypes, Rules>>(
    () =>
      rulesTypes.reduce(
        (acc, type) => {
          acc[type] = { ...ruleDefaults[type] };
          return acc;
        },
        {} as Record<RulesTypes, Rules>
      )
  );

  const handleGoBack = () => setRuleTab(null);

  return (
    <div>
      {ruleTab === null ? (
        <RulesTabs setRuleTab={setRuleTab} />
      ) : (
        <GeneralRulesConfiguration
          rulesConfig={rulesConfig}
          setRulesConfig={setRulesConfig}
          handleGoBack={handleGoBack}
        />
      )}
    </div>
  );
};

export default ProjectRules;
