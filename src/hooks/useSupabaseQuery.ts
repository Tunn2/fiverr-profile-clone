import { supabase } from "@/lib/supabaseClient";

export const fetchUserProfile = async (userId: string) => {
  if (!userId) throw new Error("User ID is required");

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw new Error(error.message);
  return data;
};
