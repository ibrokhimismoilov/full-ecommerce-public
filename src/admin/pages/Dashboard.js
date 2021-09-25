import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import StatusCard from "../components/StatusCard";
import Badge from "../components/Badge";
import Table from "../components/Table";
import statusCards from "../assets/JsonData/status-card-data.json";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [42, 26, 35, 50, 40, 55, 35, 47, 34, 40, 44, 32],
    },
    {
      name: "Store Customers",
      data: [44, 36, 47, 27, 45, 24, 45, 29, 55, 19, 29, 55],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      position: "bottom",
    },
    gird: {
      show: true,
    },
  },
};

const topCostumers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "jhon doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,250",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,250",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
  ],
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrder = {
  head: ["order ID", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "Jhon doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1711",
      user: "Jhon doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "pending",
    },
    {
      id: "#OD1711",
      user: "Jhon doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "paid",
    },
    {
      id: "#OD1711",
      user: "Jhon doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1711",
      user: "Jhon doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  const admin = useSelector((state) => state.admin.mode);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6 col-md-12">
          <div className="row">
            {statusCards.map((item, index) => {
              return (
                <div key={index} className="col-sm-12 col-6">
                  <StatusCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-6 col-md-12">
          <div className="card full-height">
            <Chart
              options={
                admin === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4 col-md-12">
          <div className="card">
            <div className="card__header">
              <h3>Top costumers</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCostumers.head}
                bodyData={topCostumers.body}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/customers">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-12">
          <div className="card">
            <div className="card__header">
              <h3>Latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrder.head}
                bodyData={latestOrder.body}
                renderHead={(item, index) => renderOrderHead(item, index)}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/orders">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
