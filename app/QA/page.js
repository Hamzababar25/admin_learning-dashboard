// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// // API Utility Functions
// const API_BASE_URL = "https://salonapp-f05m.onrender.com/api/v1/admin";

// const fetchQuestions = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await fetch(`${API_BASE_URL}/question/all`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();
//     return data.success ? data.data.questions : [];
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     return [];
//   }
// };

// const submitQuestion = async (question) => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await fetch(`${API_BASE_URL}/question/create`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,      },
//       body: JSON.stringify({ question }),
//     });
//     return await response.json();
//   } catch (error) {
//     console.error("Error submitting question:", error);
//     return null;
//   }
// };

// export default function Home() {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     fetchQuestions().then(setQuestions);
//   }, []);

//   const handleSubmit = async () => {
//     if (!newQuestion.trim()) return;
//     const result = await submitQuestion(newQuestion);
//     if (result && result.success) {
//       setQuestions([...questions, { id: Date.now(), question: newQuestion, replies: 0 }]);
//       setNewQuestion("");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="Search questions..."
//           className="w-full p-2 border rounded-lg mb-4 shadow-sm"
//         />
//         <div className="space-y-4">
//           {questions.map((q,index) => (
//              <QuestionCard key={q.id || index} {...q} />
//           ))}
//         </div>
//         <div className="mt-6">
//           <input
//             type="text"
//             placeholder="Ask a question..."
//             value={newQuestion}
//             onChange={(e) => setNewQuestion(e.target.value)}
//             className="w-full p-2 border rounded-lg mb-2"
//           />
//           <SubmitButton label="Submit" onClick={handleSubmit} />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-gray-800">Q&A Forum</h1>
//       <nav className="flex gap-4">
//         <Link href="/QA">
//           <div className="text-gray-600 hover:text-gray-800">Home</div>
//         </Link>
//         <Link href="/Submit">
//           <div className="text-gray-600 hover:text-gray-800">Submit Question</div>
//         </Link>
//       </nav>
//     </header>
//   );
// }

// function QuestionCard({ id, author = "Anonymous", time = "Just now", question, replies }) {
//   const router = useRouter();

//   return (
//     <div
//       className="p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer transition"
//       onClick={() => router.push(`/details?id=${id}`)}
//     >
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="font-semibold text-gray-800">{author}</p>
//           <p className="text-sm text-gray-500">{time}</p>
//           <p className="mt-2 text-gray-700">{question}</p>
//         </div>
//         <p className="text-sm text-blue-500">{replies} replies</p>
//       </div>
//     </div>
//   );
// }

// function SubmitButton({ label, onClick }) {
//   return (
//     <button
//       className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition"
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// }
"use client";

import { useState, useEffect } from "react";

const API_BASE_URL = "https://salonapp-f05m.onrender.com/api/v1/admin";

const fetchQuestions = async (page = 1, limit = 10) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/question/all?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

const createQuestion = async (question) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/question/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ question }),
  });
  return response.json();
};

const addAnswer = async (id, answer) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/question/${id}/answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ answer }),
  });
  return response.json();
};

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [showAnswers, setShowAnswers] = useState({});

  useEffect(() => {
    fetchQuestions().then((data) => setQuestions(data?.data?.questions || []));
  }, []);

  const handleCreateQuestion = async () => {
    if (!newQuestion) return;
    const data = await createQuestion(newQuestion);
    if (data.success) {
      setQuestions([...questions, { _id: data.data._id, question: newQuestion, admin: data.data.admin, answers: [] }]);
      setNewQuestion("");
    }
  };

  const handleAddAnswer = async () => {
    if (!newAnswer || !selectedQuestionId) return;
    const data = await addAnswer(selectedQuestionId, newAnswer);
    if (data.success) {
      setQuestions(
        questions.map((q) =>
          q._id === selectedQuestionId
            ? { ...q, answers: [...(q.answers || []), { content: newAnswer, admin: { name: "You" } }] }
            : q
        )
      );
      setNewAnswer("");
    }
  };

  const toggleAnswers = (id) => {
    setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Questions</h1>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4 shadow-sm"
      />
      <button
        onClick={handleCreateQuestion}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add Question
      </button>
      <div className="space-y-4 mt-4">
        {questions.map((q) => (
          <div key={q._id} className="p-4 border rounded-lg shadow-sm">
            <p><strong>{q.admin?.name}:</strong> {q.question}</p>
            <button
              onClick={() => toggleAnswers(q._id)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg mt-2"
            >
              {showAnswers[q._id] ? "Hide Answers" : "Show Answers"}
            </button>
            {showAnswers[q._id] && (
              <div className="mt-2 p-2 border rounded-lg bg-gray-100">
                {q.answers.length > 0 ? (
                  q.answers.map((a, index) => (
                    <p key={index}><strong>{a.admin?.name}:</strong> {a.content}</p>
                  ))
                ) : (
                  <p>No answers yet.</p>
                )}
              </div>
            )}
            <input
              type="text"
              placeholder="Add an answer"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2 shadow-sm"
            />
            <button
              onClick={() => {
                setSelectedQuestionId(q._id);
                handleAddAnswer();
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg mt-2"
            >
              Add Answer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
