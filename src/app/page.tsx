"use client";
import AboutSection from "@/components/AboutSection";
import ContactCard from "@/components/ContactCard";
import FiverrProGuarantee from "@/components/FiverrProGuarantee";
import HeaderComponent from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import ServiceCard from "@/components/ServiceCard";
import SkillSection from "@/components/SkillSection";
import { Button } from "@/components/ui/button";
import VerificationSection from "@/components/VerificationSection";
import VerificationSkills from "@/components/VerificationSkills";
import {
  useUserLanguages,
  useUserProfile,
  useUserRating,
  useUserSkills,
  useVerificationSkills,
} from "@/hooks/useSupabaseQuery";
import { Heart } from "lucide-react";

export default function Home() {
  // const checkedSkills = ["Web Design", "UX Design"];

  const userProfile = useUserProfile();
  // const userServices = useUserServices();
  const userSkills = useUserSkills();
  const userRating = useUserRating();
  const userLanguages = useUserLanguages();
  const userCheckedSkills = useVerificationSkills();
  const profile = {
    avatarUrl: userProfile.data?.avatar_url,
    nation: userProfile.data?.user_nation,
    fullName: userProfile.data?.full_name,
    username: userProfile.data?.username,
    numberOfComments: userRating.data?.total_comments,
    rating: userRating.data?.avg_rating,
    languages: userLanguages.data?.map((item) => item.language_name),
    isVerified: userProfile.data?.is_verified,
    title: userProfile.data?.user_title,
    description: userProfile.data?.user_description,
    verificationSkills: userCheckedSkills.data,
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
            numberOfComments={userRating.data?.total_comments}
            rating={userRating.data?.avg_rating}
            username={profile.username}
            isVerified={profile.isVerified}
            title={profile.title}
          />
          <VerificationSection username={profile.fullName} />
          <VerificationSkills skills={profile.verificationSkills || null} />
          <AboutSection description={profile.description} />
          <SkillSection skills={userSkills.data ?? null} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-8 h-full justify-center">
            <div className="flex justify-between">
              <Button variant="outline">More about me</Button>
              <Button variant="outline">
                <Heart />
                Save
              </Button>
            </div>
            <ContactCard
              avatarUrl={profile.avatarUrl}
              price={1}
              fullName={profile.fullName}
            />
            <FiverrProGuarantee />
          </div>
        </div>
      </div>
      <div>
        <ServiceCard
          data={{
            id: "",
            created_at: "",
            pricing_type: "project",
            service_name: "",
            service_description: "",
            service_price: 0,
            user_id: "",
          }}
        />
      </div>
    </div>
  );
}
