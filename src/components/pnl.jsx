import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent, Typography } from "@mui/material";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TraderPnLChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => {
      const date = new Date(item.date);
      return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date);
    }),
    datasets: [
      {
        label: "PnL",
        data: data.map((item) => item.pnl),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.2, // Smooth curve for line chart
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 800, // Duration of the animation in milliseconds
      easing: "easeInOutQuad", // Easing function to control the animation speed curve
    },
    plugins: {
      title: {
        display: true,
        text: "Trader’s PnL Over Time",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `PnL: $${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Trader’s PnL Visualization</Typography>
        <Line data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default TraderPnLChart;
