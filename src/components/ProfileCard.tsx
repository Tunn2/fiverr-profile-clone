import { MapPin, MessageCircle, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import VerificationBadge from "./VerificationBadge";

interface ProfileCardProp {
  avatarUrl: string;
  fullName: string;
  username: string;
  nation: string;
  languages: string[];
  rating: number;
  numberOfComments: number;
  isVerified: boolean;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProp> = (props) => {
  return (
    <div className="flex my-4">
      <Avatar className="h-44 w-auto">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-4 gap-3 justify-center">
        <div className="flex items-center gap-3">
          <p className="font-bold text-xl">{props.fullName}</p>
          <p className="text-gray-400">@{props.username}</p>
          <VerificationBadge />
        </div>
        <div className="flex gap-1">
          <div className="flex items-center">
            <Star color="black" fill="black" size={16} />
            <p className="font-bold ml-1">{props.rating}</p>
          </div>
          <p className="text-gray-400">({props.numberOfComments})</p>
        </div>
        <div>
          <p className="font-semibold">{props.title}</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 font-semibold">
            <MapPin size={20} absoluteStrokeWidth />
            <p className="font-semibold">{props.nation}</p>
          </div>
          <div className="flex items-center gap-1 font-semibold">
            <MessageCircle size={20} absoluteStrokeWidth />
            {props.languages.map((language, index) => {
              if (index < props.languages.length - 1)
                return <p key={index}>{language + ", "}</p>;
              return <p key={index}>{language}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
