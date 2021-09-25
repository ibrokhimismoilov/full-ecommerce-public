import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import Button from "../../../components/Button";
import Table from "../../components/Table";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import AdminLoading from "../../components/AdminLoading";

const customerTableHead = [
  "id",
  "title",
  "price",
  "categorySlug",
  "colors",
  "size",
  "description",
  "img1",
  "img2",
  "EDIT / DELETE / VIEW",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item) => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td>{item.categorySlug}</td>
    <td>{item.colors.toString()}</td>
    <td>{item.size.toString()}</td>
    <td>
      {item.description.length > 20
        ? item.description.slice(0, 20) + "..."
        : item.description}
    </td>
    <td>
      <img src={item.img1} alt="Loading..." />
    </td>
    <td>
      <img src={item.img2} alt="Loading..." />
    </td>
    <td>
      <div className="btn-group">
        <Link to={`/products/edit/${item.id}`}>
          <Button backgroundColor="green" size="sm" radius="2">
            <AiOutlineEdit size="16" />
          </Button>
        </Link>
        <Link to={`/products/delete/${item.id}`}>
          <Button backgroundColor="red" size="sm" radius="2">
            <AiFillDelete size="16" />
          </Button>
        </Link>
        <Link to={`/products/view/${item.id}`}>
          <Button backgroundColor="main" size="sm" radius="2">
            <AiOutlineEye size="16" />
          </Button>
        </Link>
      </div>
    </td>
  </tr>
);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await db.collection("products");
      const data = await response.get();
      const getProducts = [];
      data.docs.forEach((item) => {
        getProducts.push({ ...item.data(), id: item.id });
      });
      setProducts(getProducts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Products error =>>>", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);

  return (
    <div>
      <h1 className="page-header">
        Products
        <Link to="/products/add">
          <Button backgroundColor="green" size="sm" radius="2">
            Add Product
          </Button>
        </Link>
      </h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {products.length > 0 && !loading && (
                <Table
                  limit="5"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={products}
                  renderBody={(item) => renderBody(item)}
                />
              )}
              {!loading && products.length === 0 ? <p>No products</p> : null}
              {loading && <AdminLoading />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
