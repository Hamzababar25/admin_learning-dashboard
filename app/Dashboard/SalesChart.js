import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesChart = () => {
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
        label: "Total Sales",
        data: [100, 200, 150, 300, 480, 400, 350, 500, 450, 420, 380, 310],
        fill: true,
        backgroundColor: "rgba(255, 206, 86, 0.2)", // Light yellow fill
        borderColor: "rgba(255, 206, 86, 1)", // Yellow border
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
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
      <h2 className="text-lg font-semibold mb-4">Total Sales</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
