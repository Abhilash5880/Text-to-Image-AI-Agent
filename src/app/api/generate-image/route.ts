//app api route
import { NextResponse } from "next/server";
import { generateImageFromHuggingFace } from "@/lib/server/generateHF";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "Prompt required" }, { status: 400 });
    }

    const b64 = await generateImageFromHuggingFace(prompt);
    return NextResponse.json({ image: `data:image/png;base64,${b64}` });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ error: err.message ?? "server error" }, { status: 500 });
  }
}
