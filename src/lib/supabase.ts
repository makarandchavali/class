import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ClassData {
  id: string;
  class_section: string;
  class_teacher: string | null;
  total_subjects: number;
  time_table_created: boolean;
  old_admissions: number;
  new_admissions: number;
  active_students: number;
  deactivated_students: number;
  total_students: number;
  display_order: number;
  created_at: string;
  updated_at: string;
}
