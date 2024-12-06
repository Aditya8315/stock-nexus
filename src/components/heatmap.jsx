import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent, Typography } from "@mui/material";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PnLHeatmap = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "PnL Heatmap",
        data: data.map((item) => item.pnl),
        backgroundColor: (context) => {
          const value = context.raw;
          // Color based on profit or loss
          return value > 0
            ? "rgba(76, 175, 80, 0.7)"
            : "rgba(244, 67, 54, 0.7)";
        },
        borderColor: "transparent",
        barThickness: 10, // Adjust the thickness of the bars
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
        text: "PnL Heatmap",
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
        display: false, // Hide y-axis for a clean look
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">PnL Heatmap</Typography>
        <Bar data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default PnLHeatmap;
