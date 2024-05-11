'use server';

import { supabaseServerClient } from "../app/config/supabaseServer";

const updateQA = async (id: string, question: string, answer: string, rating: number) => {
  const supabase = await supabaseServerClient();

  const { data, error } = await supabase
    .from('qa')
    .update([{ question, answer, rating }])
    .eq('id', id)

  return { data, error };
};

export default updateQA;