"use client";
import Header from "../QA/Header";
import SubmitButton from "../QA/SubmitButton";

export default function Details() {
  const replies = [
    "Reply 1: React is a library...",
    "Reply 2: It’s for building UI...",
    // Add more replies
  ];

  return (
    <div className="">
      <Header />
      <div className="p-4 space-y-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <p className="font-semibold">Madison Clark</p>
          <p className="text-sm text-gray-500">1h ago</p>
          <p className="mt-2">What is React?</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Replies ({replies.length})</h2>
          <div className="space-y-2 mt-2">
            {replies.map((reply, index) => (
              <div key={index} className="p-2 border rounded-lg shadow-sm">
                {reply}
              </div>
            ))}
          </div>
        </div>
        <textarea
          placeholder="Write your answer here..."
          className="w-full p-2 border rounded-lg shadow-sm"
        />
        <SubmitButton
          label="Submit Answer"
          onClick={() => alert("Answer submitted!")}
        />
      </div>
    </div>
  );
}
