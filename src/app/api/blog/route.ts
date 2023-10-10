import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {

  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}


