import SkillTag from "./CheckedSkill";

interface VerificationSkillsProp {
  skills: string[];
}

const VerificationSkills: React.FC<VerificationSkillsProp> = ({ skills }) => {
  return (
    <div className="">
      <p className="font-bold mb-3">Vetted for</p>
      <div className="flex gap-10">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill_name={skill} />
        ))}
      </div>
    </div>
  );
};
export default VerificationSkills;
