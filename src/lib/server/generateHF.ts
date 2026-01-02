//server-side only

// Model FLUX.1-schnell is fast and high-quality 
const HF_MODEL = "black-forest-labs/FLUX.1-schnell";
const HF_URL = `https://router.huggingface.co/hf-inference/models/${HF_MODEL}`;

export async function generateImageFromHuggingFace(prompt: string): Promise<string> {
  const token = process.env.HUGGINGFACE_API_TOKEN;
  if (!token) throw new Error("HUGGINGFACE_API_TOKEN is missing");

  const response = await fetch(HF_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      // To handle cold starts
      "x-wait-for-model": "true", 
    },
    body: JSON.stringify({
      inputs: prompt,
      parameters: {
        // Optional: you can specify resolution etc
      }
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("HF Router Error:", response.status, errorText);
    
    if (response.status === 503) {
      throw new Error("Model is currently loading on the HF Router. Please retry in 30 seconds.");
    }
    throw new Error(`Hugging Face API Error ${response.status}: ${errorText}`);
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("image/")) {
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer).toString("base64");
  }

  // Fallback for JSON responses
  if (contentType.includes("application/json")) {
    const data = await response.json();
    const b64 = data.b64_json || data.image || data[0]?.generated_image;
    if (!b64) throw new Error("Image data missing in JSON response");
    return b64.replace(/^data:image\/[a-z]+;base64,/, "");
  }

  const ab = await response.arrayBuffer();
  return Buffer.from(ab).toString("base64");
}