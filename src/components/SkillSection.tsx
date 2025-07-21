import { Check } from "lucide-react";
import { Badge } from "./ui/badge";

interface SkillSectionProp {
  skills: string[] | null;
}

const SkillSection: React.FC<SkillSectionProp> = ({ skills }) => {
  return (
    <div className="">
      <p className="font-bold mb-3">Skills</p>
      <div className="flex gap-4">
        {skills?.map((skill, index) => (
          <Badge
            variant={"outline"}
            key={index}
            className="font-normal py-1 px-2 text-md rounded-3xl"
          >
            <Check size={24} />
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
