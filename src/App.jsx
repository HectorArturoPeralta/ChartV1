import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "./App.css";

import sourceData from "./data/sourceData.json";
import revenueData from "./data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.aling = "start";
defaults.plugins.title.display = 20;
defaults.plugins.title.display = "block";

export const App = () => {
  return (
    <div className="App">
      <div className="dateCard revenueCard">
      <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenueData),
                backgroundColor: "#0F9898",
                borderColor: "#0F9898",
              },
              {
                label: "Count",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#G09280",
                borderColor: "#G09280",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost Sources",
              },
            },
          }}
        />
      </div>

      <div className="dateCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            elements:{
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Customers Sources",
              },
            },
          }}
        />
      </div>

      <div className="dateCard categoryCard">
      <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "category Sources",
              },
            },
          }}
        />
      </div>
    </div>
  );
};