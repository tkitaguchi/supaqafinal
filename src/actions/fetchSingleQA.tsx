'use server';

import { supabaseServerClient } from "../app/config/supabaseServer";

const fetchSingleQA = async (id: string) => {
  const supabase = await supabaseServerClient();

  const { data, error } = await supabase
    .from('qa')
    .select()
    .eq('id', id)
    .single()

  return { data, error };
};

export default fetchSingleQA;