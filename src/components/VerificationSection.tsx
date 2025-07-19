interface VerificationSectionProps {
  username?: string | null;
}

const VerificationSection: React.FC<VerificationSectionProps> = ({
  username,
}) => {
  return (
    <div>
      <p className="font-bold mb-3">Vetted by Fiverr Pro</p>
      <p>{username} was selected by the Fiverr Pro team for their expertise.</p>
    </div>
  );
};

export default VerificationSection;
