// components/QuestionDetails.js
export default function QuestionDetails({ author, time, question, replies }) {
  return (
    <div className="p-4">
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{time}</p>
      <p className="mb-4">{question}</p>
      <p className="font-semibold text-lg">Replies ({replies.length})</p>
      {replies.map((reply, index) => (
        <div key={index} className="mt-2 p-2 border rounded">
          <p>{reply}</p>
        </div>
      ))}
    </div>
  );
}
