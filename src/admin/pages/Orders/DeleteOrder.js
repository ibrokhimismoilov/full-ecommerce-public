import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../../firebase";
import AdminLoading from "../../components/AdminLoading";

const DeleteOrder = () => {
  const params = useParams();
  const history = useHistory();

  const deleteHandler = async () => {
    try {
      await db.collection("orders").doc(params.id).delete();
      history.replace("/orders");
    } catch (error) {
      console.log("Delete product Error", error.message);
    }
  };

  useEffect(() => {
    deleteHandler();
  }, []);

  return (
    <div>
      <h1 className="page-header">Deleting order</h1>
      <div className="card">
        <div className="card__body">
          <AdminLoading />
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
