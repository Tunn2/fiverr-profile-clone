"use client";
import AboutSection from "@/components/AboutSection";
import ButtonComponent from "@/components/Button";
import ContactCard from "@/components/ContactCard";
import FiverrProGuarantee from "@/components/FiverrProGuarantee";
import HeaderComponent from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import SkillSection from "@/components/SkillSection";
import VerificationSection from "@/components/VerificationSection";
import VerificationSkills from "@/components/VerificationSkills";
import { useUserProfile, useUserSkills } from "@/hooks/useProfileQuery";
import { Heart } from "lucide-react";

export default function Home() {
  const checkedSkills = ["Web Design", "UX Design"];

  const userProfile = useUserProfile();
  // const userServices = useUserServices();
  const userSkills = useUserSkills();

  const profile = {
    avatarUrl: "",
    nation: "Vietnam",
    fullName: "Nguyễn Khánh Tùng",
    username: "tungnk",
    numberOfComments: 1,
    rating: 1,
    languages: ["English", "Vietnamese"],
    isVerified: true,
    title: "UI UX Designer",
  };

  return (
    <div className="h-full w-full">
      <HeaderComponent />
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-5 col-span-2">
          <ProfileCard
            avatarUrl={profile.avatarUrl}
            fullName={profile.fullName}
            languages={profile.languages}
            nation={profile.nation}
            numberOfComments={1}
            rating={1}
            username={profile.username}
            isVerified={profile.isVerified}
            title={profile.title}
          />
          <VerificationSection username={profile.fullName} />
          <VerificationSkills skills={checkedSkills} />
          <AboutSection
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dignissimos expedita cumque quibusdam odit, aut sunt fugit corporis id eos iste iusto. Ipsa aperiam eveniet reprehenderit quo excepturi dicta et."
            }
          />
          <SkillSection skills={userSkills.data ?? null} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-8 h-full justify-center">
            <div className="flex justify-between">
              <ButtonComponent content="More about me" />
              <ButtonComponent content="Save" icon={<Heart size={16} />} />
            </div>
            <ContactCard avatarUrl="" price={1} fullName={profile.fullName} />

            <FiverrProGuarantee />
          </div>
        </div>
      </div>
    </div>
  );
}
