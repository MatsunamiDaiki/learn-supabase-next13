import { supabase } from "@/utils/supabaseClient";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const id = req.url?.split("/blog/")[1];

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return NextResponse.json(error);
  if (!data) {
    notFound();
  }
  return NextResponse.json(data);
}

export async function DELETE(req: Request, res: Response) {
  const id = req.url?.split("/blog/")[1];

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) return NextResponse.json(error);

  return NextResponse.json({ message: "Deleted successfully" });
}
