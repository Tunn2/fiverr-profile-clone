import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ContactCardProp {
  fullName?: string | null;
  price?: number | null;
  avatarUrl?: string | null;
}

const ContactCard: React.FC<ContactCardProp> = (props) => {
  return (
    <Card className="flex flex-col gap-4 p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={props.avatarUrl || "https://github.com/shadcn.png"}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-bold text-sm">{props.fullName}</p>
        </div>
        <p>${props.price}/hour </p>
      </div>
      <Button>
        <Send size={20} absoluteStrokeWidth /> Contact me
      </Button>
      <p className="text-center text-gray-500">Average response time: 1 hour</p>
    </Card>
  );
};

export default ContactCard;
