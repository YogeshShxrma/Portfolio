// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gaunfshsfzgzccargcpc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhdW5mc2hzZnpnemNjYXJnY3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNzY1MDgsImV4cCI6MjA2MzY1MjUwOH0.MCPL2DTdqkqZXpB51jo5s-5hmE4KR1svCAxn0RgpYPE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);