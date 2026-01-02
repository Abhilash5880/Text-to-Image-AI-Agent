const MOCK_MODE = false; // switch this to false later

export async function generateImage(prompt: string) {
  if (MOCK_MODE) {
    await new Promise((res) => setTimeout(res, 1500));
    return {
      image: "https://picsum.photos/1024",
    };
  }

  //api route updated
  const res = await fetch("/api/generate-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error("Backend error");
  }

  return res.json();
}
