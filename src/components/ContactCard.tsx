import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ContactCardProp {
  fullName?: string | null;
  price?: number | null;
  avatarUrl?: string | null;
}

const ContactCard: React.FC<ContactCardProp> = (props) => {
  return (
    <Card className="flex flex-col gap-4 p-8">
      <CardHeader className="flex items-center justify-between p-0">
        <CardTitle className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={props.avatarUrl || "https://github.com/shadcn.png"}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardDescription className="font-bold text-sm">
            {props.fullName}
          </CardDescription>
        </CardTitle>
        <CardDescription>${props.price}/hour </CardDescription>
      </CardHeader>
      <CardContent className="w-full p-0">
        <Button className="w-full">
          <Send size={20} absoluteStrokeWidth /> Contact me
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center p-0 text-gray-400">
        Average response time: 1hour
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
