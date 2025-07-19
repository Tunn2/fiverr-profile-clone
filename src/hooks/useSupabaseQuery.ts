import {
  fetchProfileById,
  fetchRatingByUserId,
  fetchSkillsByUserId,
} from "@/lib/supabaseQueries";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";

export const useUserProfile = (userId?: string) => {
  return useQuery({
    queryKey: ["user-profile", userId],
    queryFn: () => fetchProfileById(userId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// export const useUserServices = (userId?: string) => {
//   return useQuery({
//     queryKey: ["user-services", userId],
//     queryFn: () => fetchServicesByUserId(userId),
//     staleTime: 5 * 60 * 1000,
//     gcTime: 10 * 60 * 1000,
//   });
// };

export const useUserSkills = (
  userId?: string
): UseQueryResult<string[] | undefined, Error> => {
  return useQuery({
    queryKey: ["user-skills", userId],
    queryFn: () => fetchSkillsByUserId(userId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useUserRating = (userId?: string) => {
  return useQuery({
    queryKey: ["user-rating", userId],
    queryFn: () => fetchRatingByUserId(userId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
