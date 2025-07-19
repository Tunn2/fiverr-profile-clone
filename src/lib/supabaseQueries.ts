import { Tables } from "../../database.types";
import { supabase } from "./../lib/supabaseClient";

export const fetchProfileById = async (
  userId: string = "95581512-60ef-431a-b3a1-0cd3143dce69"
): Promise<Tables<"users"> | null> => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const fetchServicesByUserId = async (
  userId: string = "95581512-60ef-431a-b3a1-0cd3143dce69"
) => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("userId", userId);
  if (error) throw new Error(error.message);
  return data;
};

export const fetchSkillsByUserId = async (
  userId: string = "95581512-60ef-431a-b3a1-0cd3143dce69"
) => {
  const user_id = userId;
  let {
    data,
    error,
  }: {
    data: { skill_name: string }[] | null;
    error: any;
  } = await supabase.rpc("get_user_skills", {
    user_id,
  });
  if (error) console.warn(error);
  return data?.map((item) => item.skill_name);
};

export const fetchServiceRatingByUserId = async (
  userId: string = "95581512-60ef-431a-b3a1-0cd3143dce69"
) => {
  const { data, error } = await supabase
    .from("service_rating")
    .select("*")
    .eq("user_id", userId)
    .limit(1);
  if (error) throw new Error(error.message);
  return data;
};

export const fetchRatingByUserId = async (
  userId: string = "95581512-60ef-431a-b3a1-0cd3143dce69"
) => {
  const user_id = userId;
  let {
    data,
    error,
  }: {
    data: {
      user_id: string;
      total_comments: number;
      avg_rating: number;
    } | null;
    error: any;
  } = await supabase
    .rpc("get_user_rating", {
      user_id,
    })
    .maybeSingle();
  if (error) console.warn(error);
  return data;
};
