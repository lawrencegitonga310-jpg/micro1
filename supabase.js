import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://mympxqqovrnudkhuoktm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_e1-jmHbhm_3nKEMlS4jgcw_s1RTdCqz";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
