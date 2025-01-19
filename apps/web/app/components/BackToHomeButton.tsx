"use client";
import { useRouter } from "next/navigation";

export function BackToHomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="mt-4 px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100 flex items-center gap-2"
    >
      <span>←</span>
      トップへ戻る
    </button>
  );
}
