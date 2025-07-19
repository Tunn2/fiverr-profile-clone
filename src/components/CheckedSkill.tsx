import { Check } from "lucide-react";

export interface CheckedSkillProp {
  skill_name: string;
}

const CheckedSkill: React.FC<CheckedSkillProp> = ({ skill_name }) => {
  return (
    <div className="flex">
      <Check size={24} />
      {skill_name}
    </div>
  );
};

export default CheckedSkill;
