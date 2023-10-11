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

export async function POST(req: Request) {
  const { id, title, content } = await req.json();
  console.log(id, title, content);

  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, created_at: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}



