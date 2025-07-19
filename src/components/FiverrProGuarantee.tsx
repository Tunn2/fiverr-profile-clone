import { ShieldCheck } from "lucide-react";

const FiverrProGuarantee: React.FC = () => {
  return (
    <div className="flex bg-gray-400 p-4 gap-2 rounded-lg">
      <ShieldCheck size={20} absoluteStrokeWidth className="flex-shrink-0" />
      <div>
        <p className="font-bold text-sm">Fiverr Pro satisfaction guarantee</p>
        <p className="text-sm">
          Fiverr Pro freelancers deliver top-quality work. If you're not
          satisfied, we'll refund you.{" "}
          <span className="underline">About satisfaction guarantee</span>
        </p>
      </div>
    </div>
  );
};

export default FiverrProGuarantee;
