import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import AdminLoading from "../../components/AdminLoading";
import Button from "../../../components/Button";
import Table from "../../components/Table";
import { db } from "../../../firebase";
import { objToArray } from "../../utils/clickOutsideRef";

const customerTableHead = [
  "id",
  "UserId",
  "UserName",
  "Count products",
  "Total price",
  "VIEW",
];

const renderHead = (item) => <th key={item.id}>{item}</th>;

const renderBody = (item) => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.userId}</td>
    <td>{item.userName}</td>
    <td>
      {objToArray(item.orders).reduce(
        (total, item) => total + Number(item.quantity),
        0
      )}
    </td>
    <td>
      {objToArray(item.orders).reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )}
    </td>
    <td>
      <div className="btn-group">
        <Link to={`/orders/view/${item.id}`}>
          <Button backgroundColor="blue" size="sm" radius="2">
            <AiOutlineEye size="16" />
          </Button>
        </Link>
        <Link to={`/orders/delete/${item.id}`}>
          <Button backgroundColor="red" size="sm" radius="2">
            <AiFillDelete size="16" />
          </Button>
        </Link>
      </div>
    </td>
  </tr>
);

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await db.collection("orders");
      const data = await response.get();
      const getOrders = [];
      data.docs.forEach((item) => {
        getOrders.push({ ...item.data(), id: item.id });
      });
      setOrders(getOrders);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Orders error =>>>", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // console.log(orders);

  return (
    <div>
      <h1 className="page-header">Orders</h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {orders.length > 0 && !loading && (
                <Table
                  limit="5"
                  headData={customerTableHead}
                  renderHead={(item) => renderHead(item)}
                  bodyData={orders}
                  renderBody={(item) => renderBody(item)}
                />
              )}
              {!loading && orders.length === 0 ? <p>No orders</p> : null}
              {loading && <AdminLoading />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
