import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Helmet from "../components/Helmet";
import InfinityList from "../components/InfinityList";
import Loading from "../components/Loading";
import category from "../FAKE-DATA/category";
import colors from "../FAKE-DATA/product-color";
import size from "../FAKE-DATA/product-size";
import { db } from "../firebase";

function Catalog() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = db.collection("products");
      const data = await response.get();
      const productsFromBase = [];
      data.docs.forEach((item) => {
        productsFromBase.push({ ...item.data(), id: item.id });
      });
      // console.log(productsFromBase);
      setProductData(productsFromBase);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setProductData([]);
      console.log("Products Catalog error =>>>", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const initialFilter = {
    category: [],
    color: [],
    size: [],
  };

  const filterRef = useRef(null);

  const toggleFilter = () => filterRef.current.classList.toggle("show");

  const productList = productData;

  const [filter, setFilter] = useState(initialFilter);

  const [products, setProducts] = useState(productList);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;
        default:
          return false;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
          return false;
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, setProducts, productData]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const clearFilter = () => setFilter(initialFilter);

  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          <div className="catalog__filter-inner">
            <div className="catalog__filter-close">
              <AiOutlineClose onClick={toggleFilter} />
            </div>
            <div className="catalog__filter-box">
              <h1 className="catalog__filter-title">Category</h1>
              <div className="catalog__filter-content">
                {category.map((item, index) => {
                  return (
                    <div key={index} className="catalog__filter-content-item">
                      <Checkbox
                        checked={filter.category.includes(item.categorySlug)}
                        label={item.display}
                        onChange={(input) =>
                          filterSelect("CATEGORY", input.checked, item)
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="catalog__filter-box">
              <h1 className="catalog__filter-title">Colors</h1>
              <div className="catalog__filter-content">
                {colors.map((item, index) => {
                  return (
                    <div key={index} className="catalog__filter-content-item">
                      <Checkbox
                        checked={filter.color.includes(item.color)}
                        label={item.display}
                        onChange={(input) =>
                          filterSelect("COLOR", input.checked, item)
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="catalog__filter-box">
              <h1 className="catalog__filter-title">Sizes</h1>
              <div className="catalog__filter-content">
                {size.map((item, index) => {
                  return (
                    <div key={index} className="catalog__filter-content-item">
                      <Checkbox
                        checked={filter.size.includes(item.size)}
                        label={item.display}
                        onChange={(input) =>
                          filterSelect("SIZE", input.checked, item)
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="catalog__filter-box">
              <Button backgroundColor="orange" size="sm" onClick={clearFilter}>
                Clear
              </Button>
            </div>
          </div>
        </div>
        <div className="catalog__filter-toggle">
          <Button size="sm" onClick={toggleFilter}>
            Filter
          </Button>
        </div>
        <div className="catalog__content">
          {loading ? <Loading /> : null}
          {productData.length > 0 && products.length > 0 && (
            <InfinityList data={products} />
          )}
          {!loading && (!productData.length || !products.length) && (
            <h1>No products</h1>
          )}
        </div>
      </div>
    </Helmet>
  );
}

export default Catalog;
