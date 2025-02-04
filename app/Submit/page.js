"use client";
import Header from "../QA/Header";
import SubmitButton from "../QA/SubmitButton";

export default function Submit() {
  return (
    <div className="">
      <Header />
      <div className="p-4">
        <h2 className="text-lg font-semibold">Submit a New Question</h2>
        <textarea
          placeholder="Enter your question here..."
          className="w-full p-2 border rounded-lg shadow-sm mt-4"
        />
        <SubmitButton
          label="Submit Question"
          onClick={() => alert("Question submitted!")}
        />
      </div>
    </div>
  );
}
