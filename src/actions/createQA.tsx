'use server';

import { supabaseServerClient } from "../app/config/supabaseServer";

const createQA = async (question: string, answer: string, rating: number) => {
  const supabase = await supabaseServerClient();

  const { data, error } = await supabase
    .from('qa')
    .insert([{ question, answer, rating }])
    .select();

  return { data, error };
};

export default createQA;
