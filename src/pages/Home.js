import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import { Section, SectionBody, SectionTitle } from "../components/Section";
import heroSliderData from "../FAKE-DATA/hero-slider";
import Grid from "../components/Grid";
import PolicyCard from "../components/PolicyCard";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner.png";
import { db } from "../firebase";
import ProductCardLoading from "../components/ProductCardLoading";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [policyData, setPolicyData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [showProducts2, setShowProducts2] = useState([]);

  const getPolicy = async () => {
    try {
      const response = db.collection("policy");
      const data = await response.get();
      const policyFromBase = [];
      data.docs.forEach((item) => {
        policyFromBase.push({ ...item.data(), id: item.id });
      });
      setPolicyData(policyFromBase);
    } catch (error) {
      console.log("policyData error =>>>", error);
    }
  };

  const getProduct = async () => {
    try {
      const response = db.collection("products");
      const data = await response.get();
      const productsFromBase = [];
      data.docs.forEach((item) => {
        productsFromBase.push({ ...item.data(), id: item.id });
      });
      setProductData(productsFromBase);
    } catch (error) {
      setProductData([]);
      console.log("policyData error =>>>", error);
    }
  };

  useEffect(() => {
    getPolicy();
    getProduct();
  }, []);

  useEffect(() => {
    // faqat 8ta productni ko'rsat
    setShowProducts(
      productData.length > 8 ? productData.slice(0, 8) : productData
    );

    if (productData.length > 8) {
      setShowProducts2(
        productData.length >= 16
          ? productData.slice(8, 16)
          : productData.slice(8)
      );
    }
  }, [productData]);

  return (
    <Helmet title="Home">
      {/* HeroSlider section */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* End HeroSlider section */}

      {/* Policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policyData.length
              ? policyData.map((item, index) => {
                  return (
                    <Link to="/policy" key={index}>
                      <PolicyCard {...item} />
                    </Link>
                  );
                })
              : Array(4)
                  .fill({ loading: true })
                  .map((item, index) => {
                    return <PolicyCard key={index} {...item} />;
                  })}
          </Grid>
        </SectionBody>
      </Section>
      {/* End Policy section */}

      {/* Product section */}
      {/* Faqat 8ta product ko'rinadi */}
      <Section>
        <SectionTitle>Best seller products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {showProducts.length
              ? showProducts.map((item) => {
                  return (
                    <ProductCard
                      key={item.id}
                      title={item.title}
                      price={Number(item.price)}
                      img1={item.img1}
                      img2={item.img2}
                      id={item.id}
                    />
                  );
                })
              : Array(4)
                  .fill(1)
                  .map((item, index) => {
                    return <ProductCardLoading key={item + index} />;
                  })}
          </Grid>
        </SectionBody>
      </Section>
      {/* End Product section */}

      {/* Banner section */}
      <Section>
        <SectionBody>
          <Link to="/catalog" className="banner">
            <img src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section>
      {/* End Banner section */}

      {/* New Products section */}
      {/* Agar product 8tadan ko'p bo'lsa 8dan 16gacha product ko'rinadi */}
      {productData.length > 8 && (
        <Section>
          <SectionTitle>New products</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {showProducts2.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    price={Number(item.price)}
                    img1={item.img1}
                    img2={item.img2}
                    id={item.id}
                  />
                );
              })}
            </Grid>
          </SectionBody>
        </Section>
      )}

      {/* End New Products section */}
    </Helmet>
  );
}
