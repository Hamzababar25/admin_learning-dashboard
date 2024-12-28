import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the necessary modules
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const UsersChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Users",
        data: [300, 400, 350, 420, 480, 500, 550, 600, 590, 580, 570, 560],
        backgroundColor: "rgb(239,209,145)", // Teal bar color
        borderColor: "rgb(239,209,145)", // Teal border
        borderWidth: 1,
      },
      {
        label: "Active Users",
        data: [200, 300, 250, 320, 400, 450, 480, 500, 490, 470, 450, 430],
        backgroundColor: "rgb(187,143,50)", // Purple bar color
        borderColor: "rgb(187,143,50)", // Purple border
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Light gridlines
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UsersChart;
