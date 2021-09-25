import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Helmet from "../components/Helmet";
import ProductView from "../components/ProductView";
import { db } from "../firebase";
import { Section, SectionBody } from "../components/Section";
import Loading from "../components/Loading";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const fetchProduct = async () => {
    try {
      const res = await db.collection("products").doc(params.id).get();
      setProduct({ ...res.data(), id: res.id });
    } catch (error) {
      setProduct([]);
      console.log("Get Product error =>>>", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Helmet title={"Product"}>
      {/* Productview */}
      <Section>
        <SectionBody>
          {product ? <ProductView product={product} /> : <Loading />}
        </SectionBody>
      </Section>
      {/* End Productview */}

      {/* Releted products */}
      {/* <Section>
        <SectionTitle>Releted products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {reletedProducts.map((item) => {
              return (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  img1={item.img1}
                  img2={item.img2}
                  price={Number(item.number)}
                />
              );
            })}
          </Grid>
        </SectionBody>
      </Section> */}
      {/* End Releted products */}
    </Helmet>
  );
};

export default Product;
