import { ServiceWithRating } from "@/lib/supabaseQueries";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { Button } from "./ui/button";

interface ServiceCardProp {
  data: ServiceWithRating;
}

const ServiceCard = ({ data }: ServiceCardProp) => {
  return (
    <Card className="w-[350px] flex-shrink-0 gap-1">
      <CardContent className="flex gap-2">
        <Image
          src={
            "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/340101778_1256143828646695_3394920491697366970_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeECUkDxzjyllmm-AIt6m7v7xib-WlJwiAXGJv5aUnCIBQlAx9SbXqsJJ8DZzYZv8V7z9Ac3E6JhntB1n1IpCDqV&_nc_ohc=9XxxnOSK6bsQ7kNvwHZk9oi&_nc_oc=AdlDNMM1-T5FNMc-4GjnlwNeBO6TncC8P0BlZAOGq8PiPiXHvIRG5uzLgpSE27chXUM&_nc_zt=24&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=XyYEVixei-OShIKfLiVoTg&oh=00_AfSWqcxRxhrMEnWbKGsE9LWNIGXHXaB3oJVBhMqIahYd0w&oe=6880484A"
          }
          alt={data.service_description}
          width={100}
          height={100}
          className="w-[80px] h-[80px] object-cover"
        />
        <div className="flex flex-col gap-2">
          <CardTitle>{data.service_name}</CardTitle>
          <CardDescription>{data.service_description} </CardDescription>
          <div className="flex gap-1">
            <Rating defaultValue={data.service_rating?.avg_rating} readOnly>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton key={index} />
              ))}
            </Rating>
            <p className="text-lg font-bold">
              {data.service_rating?.avg_rating}
            </p>
            <p className="text-lg text-gray-500">
              ({data.service_rating?.number_of_comments})
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div>
          <p>From</p>
          <p className="text-gray-500 font-semibold">
            ${data.service_price} / {data.pricing_type}
          </p>
        </div>
        <CardAction>
          <Button variant={"outline"}>More details</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
