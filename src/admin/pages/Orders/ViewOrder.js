import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebase";
import AdminLoading from "../../components/AdminLoading";
import Table from "../../components/Table";
import { objToArray } from "../../utils/clickOutsideRef";

const initialOrder = {
  date: new Date(),
  userId: null,
  userName: null,
  orders: null,
};

const customerTableHead = [
  "Img",
  "Title",
  "Size",
  "Color",
  "Price",
  "Count",
  "Total price",
];

const renderHead = (item) => <th key={item.id}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>
      <img src={item.img} width="100px" alt="loading..." />
    </td>
    <td>{item.title}</td>
    <td>{item.color}</td>
    <td>{item.size}</td>
    <td>{item.price}</td>
    <td>{item.quantity}</td>
    <td>{item.price * item.quantity}</td>
  </tr>
);

const ViewOrder = () => {
  const params = useParams();

  const [order, setOrder] = useState(initialOrder);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const fetchOrder = async () => {
    setLoading(true);
    try {
      const res = await db.collection("orders").doc(params.id).get();
      setOrder({ ...res.data(), id: res.id });
      setError("");
      setLoading(false);
    } catch (error) {
      setError(error?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="orders">
      <h1 className="page-header">
        {loading ? (
          "Single order"
        ) : (
          <>
            {order.userName}
            <span className="page-header__date">
              date: {new Date(order.date.seconds * 1000).toLocaleString()}
            </span>
          </>
        )}
      </h1>
      <div className="card">
        <div className="card__body">
          {loading ? (
            <AdminLoading />
          ) : (
            <>
              {error && <span className="error-text">{error}</span>}
              {objToArray(order?.orders).length > 0 && !loading && (
                <Table
                  limit="5"
                  headData={customerTableHead}
                  renderHead={(item) => renderHead(item)}
                  bodyData={objToArray(order.orders)}
                  renderBody={(item) => renderBody(item)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
