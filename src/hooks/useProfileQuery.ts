import {
  fetchProfileById,
  fetchServicesByUserId,
  fetchSkillsByUserId,
} from "@/lib/supabaseQueries";
import { useQuery } from "@tanstack/react-query";

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

import type { UseQueryResult } from "@tanstack/react-query";

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
