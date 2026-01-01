const MOCK_MODE = true; // switch this to false later

export async function generateImage(prompt: string) {
  if (MOCK_MODE) {
    await new Promise((res) => setTimeout(res, 1500));
    return {
      image: "https://picsum.photos/1024",
    };
  }

  const res = await fetch("http://localhost:5000/generate-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error("Backend error");
  }

  return res.json();
}
