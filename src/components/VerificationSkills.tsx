import { Check } from "lucide-react";
import { Badge } from "./ui/badge";

interface VerificationSkillsProp {
  skills: string[] | null;
}

const VerificationSkills: React.FC<VerificationSkillsProp> = ({ skills }) => {
  return (
    <div className="">
      <p className="font-bold mb-3">Vetted for</p>
      <div className="flex gap-10">
        {skills &&
          skills.map((skill, index) => (
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
export default VerificationSkills;
