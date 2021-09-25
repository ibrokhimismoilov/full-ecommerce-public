import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Checkbox from "../../../components/Checkbox";
import category from "../../../FAKE-DATA/category";
import colors from "../../../FAKE-DATA/product-color";
import size from "../../../FAKE-DATA/product-size";
import { db } from "../../../firebase";
import AdminLoading from "../../components/AdminLoading";

const initialState = {
  title: "",
  price: "",
  categorySlug: category[0].categorySlug,
  colors: [],
  size: [],
  description: "",
  img1: null,
  img2: null,
};

const EditProduct = () => {
  const params = useParams();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const [value, setValue] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      const res = await db.collection("products").doc(params.id).get();
      setValue({ ...res.data(), id: res.id });
    } catch (error) {
      setValue([]);
      console.log("Edit Product =>>>", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const editProductHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await db.collection("products").doc(params.id).update(value);
      history.replace("/products");
      setValue(initialState);
      setErrorMsg("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const selectCheckbox = (e, item, type) => {
    switch (type) {
      case "COLORS":
        if (e.checked && !value.colors.includes(item.color)) {
          setValue((prev) => ({
            ...prev,
            colors: [...prev.colors, item.color],
          }));
        } else {
          const newColors = value.colors.filter((e) => e !== item.color);
          setValue((prev) => ({
            ...prev,
            colors: newColors,
          }));
        }

        break;
      case "SIZES":
        if (e.checked && !value.size.includes(item.size)) {
          setValue((prev) => ({
            ...prev,
            size: [...prev.size, item.size],
          }));
        } else {
          const newsizes = value.size.filter((e) => e !== item.size);
          setValue((prev) => ({
            ...prev,
            size: newsizes,
          }));
        }
        break;
      default:
        return null;
    }
  };

  return (
    <div className="add-product">
      <h1 className="page-header">Edit{loading && "ing"} Product</h1>
      {errorMsg && <p className="error-text">{errorMsg}</p>}
      {loading ? (
        <AdminLoading />
      ) : (
        <form className="add-product__form" onSubmit={editProductHandler}>
          <div className="row">
            <div className="col-md-12 col-6">
              <div className="add-product__img-box">
                <div className="add-product__img">
                  <img src={value.img1} alt="Loading..." />
                </div>
              </div>
              <div className="add-product__img-box">
                <div className="add-product__img">
                  <img src={value.img2} alt="Loading..." />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-6">
              <div className="add-product__inputbox">
                <label className="add-product__label">Title</label>
                <input
                  className="add-product__input"
                  placeholder="Title"
                  type="text"
                  required
                  name="title"
                  value={value.title}
                  onChange={inputHandler}
                />
              </div>
              <div className="add-product__inputbox">
                <label className="add-product__label">Price</label>
                <input
                  className="add-product__input"
                  placeholder="Price"
                  type="number"
                  min="0"
                  required
                  name="price"
                  value={value.price}
                  onChange={inputHandler}
                />
              </div>
              <div className="add-product__inputbox">
                <label className="add-product__label">CategorySlug</label>
                <select
                  required
                  name="categorySlug"
                  value={value.categorySlug}
                  onChange={inputHandler}
                  className="add-product__select"
                >
                  {category.map((item, index) => {
                    return (
                      <option key={index} value={item.categorySlug}>
                        {item.display}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="add-product__inputbox">
                <label className="add-product__label">Colors</label>
                <div className="add-product__checkbox-group">
                  {colors.map((item, index) => {
                    return (
                      <div key={index} className="add-product__checkbox-item">
                        <Checkbox
                          onChange={(e) => selectCheckbox(e, item, "COLORS")}
                          label={item.display}
                          checked={value.colors.includes(
                            item.display.toLowerCase()
                          )}
                          className="main-color"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="add-product__inputbox">
                <label className="add-product__label">Sizes</label>
                <div className="add-product__checkbox-group">
                  {size.map((item, index) => {
                    return (
                      <div key={index} className="add-product__checkbox-item">
                        <Checkbox
                          onChange={(e) => selectCheckbox(e, item, "SIZES")}
                          label={item.display}
                          checked={value.size.includes(
                            item.display.toLowerCase()
                          )}
                          className="main-color"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="add-product__inputbox">
                <label className="add-product__label">Descripttion</label>
                <textarea
                  required
                  onChange={inputHandler}
                  name="description"
                  value={value.description}
                  className="add-product__textarea"
                ></textarea>
              </div>
              <button type="submit" className="add-product__btn">
                Upload Product
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProduct;
