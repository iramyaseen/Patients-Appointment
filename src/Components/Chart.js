import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["Male", "Female", "Child"];
const data = {
  datasets: [
    {
      data: [8, 10, 5],
    },
  ],
  labels: labels,
};
const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
