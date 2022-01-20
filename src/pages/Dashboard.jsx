import React from "react";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../component/dashboard-warpper/DashboardWrapper";
import { colors, data } from "../constants";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../component/summary-box/SummaryBox";
import Box from "../component/box/Box";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import OverAllList from "../component/overall-list/OverAllList";
import RevenueList from "../component/revenue-list/RevenueList";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary${index}`}
                  className="col-6 col-md-6 col-sm-12 mb"
                >
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
          <div className="col-12">
            <Box>{RevenueByMonthsChart()}</Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb">
          overall
        </div>
        <div className="mb">
          <OverAllList item={data}/>
        </div>
        <div className="title mb">
          Revenue by channel
        </div>
        <div className="mb">
          <RevenueList datas={data}/>
        </div>
        </DashboardWrapperRight>
    </DashboardWrapper>
  );
};

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };
  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data,
      },
    ],
  };
  return (
    <>
      <div className="title mb">RevenueByMonthsChart</div>
      <div>
        <Bar options={chartOptions} data={chartData} height='300px'></Bar>
      </div>
    </>
  );
};

export default Dashboard;
