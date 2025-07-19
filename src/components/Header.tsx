import Image from "next/image";
import { Input } from "./ui/input";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "./ui/button";
import { categoryItems, navigationItems } from "@/constants/enums";
import { Separator } from "./ui/separator";
const HeaderComponent: React.FC = () => {
  return (
    <div className="h-1/6 w-full">
      <div className="flex h-1/3 items-center justify-between">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/640px-Fiverr_Logo_09.2020.svg.png"
          width={100}
          height={100}
          alt="Picture of the author"
          className="h-full w-auto"
        />

        <div className="flex w-[20%] h-full items-center">
          <Input className="h-full" placeholder="Search for any service" />
          <Search
            color="white"
            size={48}
            className="bg-black h-full w-auto px-3  border-4 border-black rounded cursor-pointer"
          />
        </div>
        {navigationItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center  font-bold bg-white text-xl px-3 py-1 text-black hover:bg-gray-100 cursor-pointer rounded"
            >
              <p className="h-full">{item.title}</p>
              {item.hasDropdown && <ChevronDown />}
            </div>
          );
        })}
        <Button className="bg-white text-xl text-black border-2 border-black rounded hover:bg-gray-100">
          Join
        </Button>
      </div>
      <div className="flex flex-col gap-2 my-5">
        <Separator />
        <div className="flex gap-3 items-center justify-between">
          {categoryItems.map((item, index) => {
            return (
              <p
                key={index}
                className="bg-white text-md  text-gray-500 hover:underline hover:decoration-green-500 hover:underline-offset-4 py-1 px-1 cursor-pointer"
              >
                {item}
              </p>
            );
          })}
        </div>
        <Separator />
      </div>
    </div>
  );
};
export default HeaderComponent;
