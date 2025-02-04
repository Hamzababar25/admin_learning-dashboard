"use client";
import { useRouter } from "next/navigation";

export default function QuestionCard({ id, author, time, question, replies }) {
  const router = useRouter();

  return (
    <div
      className="p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer transition"
      onClick={() => router.push(`/details?id=${id}`)}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">{time}</p>
          <p className="mt-2 text-gray-700">{question}</p>
        </div>
        <p className="text-sm text-blue-500">{replies} replies</p>
      </div>
    </div>
  );
}
