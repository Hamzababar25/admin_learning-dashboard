export default function CoursesList() {
  const courses = Array(5).fill({
    name: "Makeup Fundamentals: Master the Basics",
    category: "Basic Makeup Techniques",
    price: "$450",
    status: "Active Course",
  });

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mt-8">
      <h2 className="text-lg font-semibold mb-4">Courses List</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b">Course Name</th>
            <th className="p-2 border-b">Category</th>
            <th className="p-2 border-b">Price</th>
            <th className="p-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="p-2 border-b">{course.name}</td>
              <td className="p-2 border-b">{course.category}</td>
              <td className="p-2 border-b">{course.price}</td>
              <td className="p-2 border-b">{course.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
