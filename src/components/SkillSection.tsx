import SkillTag, { SkillTagProp } from "./SkillTag";

interface SkillSectionProp {
  skills: string[] | null;
}

const SkillSection: React.FC<SkillSectionProp> = ({ skills }) => {
  return (
    <div className="">
      <p className="font-bold mb-3">Skills</p>
      <div className="flex gap-4">
        {skills?.map((skill, index) => (
          <SkillTag skillName={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
