"use client";

import { useState } from "react";
import { generateImage } from "@/lib/generateImage";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError("");
      setImage(null);

      const res = await generateImage(prompt);
      setImage(res.image);
    } catch (err) {
      setError("Image generation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Text to Image AI</h1>

      <p className="mb-6 text-neutral-400">
        Enter a description and generate an AI image.
      </p>

      <div className="flex gap-2 mb-6">
        <input
          className="px-4 py-2 w-72 rounded bg-neutral-800 border border-neutral-700"
          placeholder="A futuristic city at sunset"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          disabled={!prompt || loading}
          className="px-4 py-2 rounded bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {image && (
        <div className="mt-6 flex flex-col items-center">
          <img src={image} alt="Generated" className="rounded-lg w-96" />
          <a
            href={image}
            download
            className="mt-3 text-blue-400 underline"
          >
            Download Image
          </a>
        </div>
      )}
    </main>
  );
}
