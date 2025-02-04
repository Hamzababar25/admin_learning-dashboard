// pages/index.js
import Header from "../QA/Header";
import QuestionCard from "../QA/QuestionCard";

export default function Home() {
  const questions = [
    {
      id: 1,
      author: "Madison Clark",
      time: "1h ago",
      question: "What is React?",
      replies: 5,
    },
    {
      id: 2,
      author: "Scarlett Lee",
      time: "2h ago",
      question: "How to use Next.js?",
      replies: 10,
    },
    // Add more...
  ];

  return (
    <div className="">
      <Header />
      <div className="p-4">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full p-2 border rounded-lg mb-4 shadow-sm"
        />
        <div className="space-y-4">
          {questions.map((q) => (
            <QuestionCard key={q.id} {...q} />
          ))}
        </div>
      </div>
    </div>
  );
}
