import React, { useContext, useEffect, useState } from "react";
import { ProductModalContext } from "../context/productModalContext";
import { db } from "../firebase";
import { GetIcon } from "./GetIcon";
import Loading from "./Loading";
import ProductView from "./ProductView";

const ProductViewModal = () => {
  const { contextProductValue, setContextProductValue } =
    useContext(ProductModalContext);
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await db
        .collection("products")
        .doc(contextProductValue)
        .get();
      setProduct({ ...res.data(), id: res.id });
    } catch (error) {
      setProduct(null);
      console.log("Get Product error =>>>", error);
    }
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      closeHandler();
    };
  }, [contextProductValue, setContextProductValue]);

  const closeHandler = () => {
    setProduct(null);
    setContextProductValue(null);
  };

  return (
    <div className="product-view__modal">
      <div onClick={closeHandler} className="product-view__modal-close">
        <GetIcon icon="close" />
      </div>
      <div className="product-view__modal-content">
        {product ? (
          <ProductView product={product} closeModal={closeHandler} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ProductViewModal;
