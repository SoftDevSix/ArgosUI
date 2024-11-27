import React, { useState } from "react";
import RulesTabs from "./RulesTabs";
import { RulesTypes } from "../../../types/types";

const ProjectRules:React.FC = () => {
  const [ruleTab, setRuleTab] = useState<RulesTypes | null>(null);

  return (
    <div>
      <RulesTabs setRuleTab={setRuleTab} />
    </div>
  );
};

export default ProjectRules;
