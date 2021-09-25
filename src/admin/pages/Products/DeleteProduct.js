import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db, storage } from "../../../firebase";
import AdminLoading from "../../components/AdminLoading";

const DeleteProduct = () => {
  const params = useParams();
  const history = useHistory();

  const deleteHandler = async () => {
    try {
      const res = await db.collection("products").doc(params.id).get();
      const product = { ...res.data() };
      console.log(product, product.img1DeleteUrl);
      try {
        // img 1 deleteting
        await storage.ref().child(product.img1DeleteUrl);

        try {
          // img 2 deleteting
          await storage.ref().child(product.img2DeleteUrl);
          try {
            await db.collection("products").doc(params.id).delete();
            history.replace("/products");
          } catch (error) {
            console.log("Delete product Error", error.message);
          }
        } catch (error) {
          console.log("Delete img2 product error", error.message);
        }
      } catch (error) {
        console.log("Delete img1 product error", error.message);
      }
    } catch (error) {
      console.log("FetchProduct Error  =>>>", error);
    }
  };

  useEffect(() => {
    deleteHandler();
  }, []);

  return (
    <div>
      <h1 className="page-header">Deleting product</h1>
      <div className="card">
        <div className="card__body">
          <AdminLoading />
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
