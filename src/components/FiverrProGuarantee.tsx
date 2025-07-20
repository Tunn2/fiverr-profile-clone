import { ShieldCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const FiverrProGuarantee: React.FC = () => {
  return (
    <Card className="bg-gray-400">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <ShieldCheck /> Fiverr Pro satisfaction guarantee
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-black">
          Fiverr Pro freelancers deliver top-quality work. If you're not
          satisfied, we'll refund you.{" "}
          <span className="underline">About satisfaction guarantee</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FiverrProGuarantee;
