interface AboutSectionProp {
  description?: string | null;
}

const AboutSection: React.FC<AboutSectionProp> = ({ description }) => {
  return (
    <div className="">
      <p className="font-bold mb-3">About me</p>
      <p>{description}</p>
    </div>
  );
};

export default AboutSection;
