import React, { useState } from "react";
import RulesTabs from "./RulesTabs";
import { Rules, RulesTypes } from "../../../types/types";
import GeneralRulesConfiguration from "./GeneralRulesConfiguration";

interface ProjectRulesProps {
  rulesConfig: Record<RulesTypes, Rules>;
  setRulesConfig: React.Dispatch<
    React.SetStateAction<Record<RulesTypes, Rules>>
  >;
}

const ProjectRules: React.FC<ProjectRulesProps> = ({
  rulesConfig,
  setRulesConfig,
}) => {
  const [ruleTab, setRuleTab] = useState<RulesTypes | null>(null);

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
