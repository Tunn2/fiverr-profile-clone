export interface SkillTagProp {
  skillName: string;
}

const SkillTag: React.FC<SkillTagProp> = ({ skillName }) => {
  return (
    <div className="border-1 px-4 py-1 border-gray-300 rounded-2xl">
      <p>{skillName}</p>
    </div>
  );
};

export default SkillTag;
