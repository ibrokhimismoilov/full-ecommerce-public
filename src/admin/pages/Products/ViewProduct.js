import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductView from "../../../components/ProductView";
import { Section, SectionBody } from "../../../components/Section";
import AdminLoading from "../../components/AdminLoading";
import { db } from "../../../firebase";

const ViewProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await db.collection("products").doc(params.id).get();
      setProduct({ ...res.data(), id: res.id });
    } catch (error) {
      setProduct([]);
      console.log("Product =>>>", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (product) {
    return (
      <Section>
        <SectionBody>
          <ProductView product={product} adminView={true} />
        </SectionBody>
      </Section>
    );
  } else return <AdminLoading />;
};

export default ViewProduct;
