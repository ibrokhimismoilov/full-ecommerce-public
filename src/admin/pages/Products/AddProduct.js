import React, { useState } from "react";
import { useHistory } from "react-router";
import Checkbox from "../../../components/Checkbox";
import category from "../../../FAKE-DATA/category";
import colors from "../../../FAKE-DATA/product-color";
import size from "../../../FAKE-DATA/product-size";
import { db, storage } from "../../../firebase";
import AdminLoading from "../../components/AdminLoading";

const initialState = {
  title: "",
  price: "",
  categorySlug: category[0].categorySlug,
  colors: [],
  size: [],
  description: "",
  img1: null,
  img1DeleteUrl: null,
  img2: null,
  img2DeleteUrl: null,
};

const initialStateImages = {
  img1: null,
  img2: null,
};

const AddProduct = () => {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const [value, setValue] = useState(initialState);
  const [uploadImg, setUploadImg] = useState(initialStateImages);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const [loading, setLoading] = useState(false);
  const [progressLoading1, setProgressLoading1] = useState(0);
  const [progressLoading2, setProgressLoading2] = useState(0);

  const addProductHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadTask1 = storage
      .ref(`product-images/${value.img1.name}`)
      .put(value.img1);

    const uploadTask2 = storage
      .ref(`product-images/${value.img2.name}`)
      .put(value.img2);

    uploadTask1.on(
      "state_changed",
      (snapShot) => {
        // 1-rasm yuklanayotgandagi progress
        const progress =
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgressLoading1(progress);
        setErrorMsg("");
      },
      (err) => {
        setErrorMsg(err.message);
      },
      () => {
        storage
          .ref("product-images")
          .child(value.img1.name)
          .getDownloadURL()
          .then((url1) => {
            // 1 rasm yuklanib bo'ldi
            uploadTask2.on(
              "state_changed",
              (snapShot) => {
                // 2-rasm yuklanayotgandagi progress
                const progress =
                  (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
                setProgressLoading2(progress);
                setErrorMsg("");
              },
              (err) => {
                setErrorMsg(err.message);
              },
              () => {
                storage
                  .ref("product-images")
                  .child(value.img2.name)
                  .getDownloadURL()
                  .then((url2) => {
                    // 2 rasm yuklanib bo'ldi
                    // bazaga Ma'lumotlar yozildi
                    db.collection("products")
                      .add({
                        title: value.title,
                        price: value.price,
                        categorySlug: value.categorySlug,
                        colors: value.colors,
                        size: value.size,
                        description: value.description,
                        img1: url1,
                        img1DeleteUrl: value.img1DeleteUrl,
                        img2: url2,
                        img2DeleteUrl: value.img2DeleteUrl,
                      })
                      .then(() => {
                        // console.log("SUCCESS>>>", value);
                        setValue(initialState);
                        setUploadImg(initialStateImages);
                        setErrorMsg("");
                        setLoading(false);
                        history.replace("/products");
                      })
                      .catch((err) => {
                        setLoading(false);
                        setErrorMsg(err.message);
                      });
                  });
              }
            );
          })
          .catch((err) => {
            setLoading(false);
            setErrorMsg(err.message);
          });
      }
    );
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "img1" || name === "img2") {
      if (
        e.target.files &&
        e.target.files[0] &&
        types.includes(e.target.files[0].type)
      ) {
        var reader = new FileReader();
        reader.onload = function (e) {
          setUploadImg((state) => ({ ...state, [name]: e.target.result }));
        };
        reader.readAsDataURL(e.target.files[0]);
        setErrorMsg("");
        console.log(e.target.files[0]);
        setValue((prev) => ({
          ...prev,
          [name]: e.target.files[0],
          [name + "DeleteUrl"]: "product-images/" + e.target.files[0].name,
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          [name]: null,
          [name + "DeleteUrl"]: null,
        }));
        setErrorMsg(
          "File yuklashda xatolik bor, Faqat [png, jpeg, jpg] rasmlarni yuklashingiz mumkin"
        );
      }
    } else {
      setErrorMsg("");
      setValue((prev) => ({ ...prev, [name]: value }));
    }
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

  // console.log(value);

  return (
    <div className="add-product">
      <h1 className="page-header">
        {loading ? "Adding " : "Add "}
        Product
      </h1>
      {errorMsg && <p className="error-text">{errorMsg}</p>}
      {loading ? (
        <>
          <AdminLoading />
          <span hidden>{(progressLoading1, progressLoading2)}</span>
        </>
      ) : (
        <form className="add-product__form" onSubmit={addProductHandler}>
          <div className="row">
            <div className="col-md-12 col-6">
              <div className="add-product__img-box">
                <div className="add-product__img">
                  {uploadImg?.img1 ? (
                    <img src={uploadImg?.img1} alt="Loading..." />
                  ) : null}
                </div>
                <label className="add-product__btn">
                  Upload Img 1
                  <input
                    hidden
                    type="file"
                    required
                    name="img1"
                    onChange={inputHandler}
                  />
                </label>
              </div>
              <div className="add-product__img-box">
                <div className="add-product__img">
                  {uploadImg?.img2 ? (
                    <img src={uploadImg?.img2} alt="Loading..." />
                  ) : null}
                </div>
                <label className="add-product__btn">
                  Upload Img 2
                  <input
                    hidden
                    type="file"
                    required
                    name="img2"
                    onChange={inputHandler}
                  />
                </label>
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
                          className="main-color"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* <div className="add-product__inputbox">
              <label className="add-product__label">Sizes</label>
              <div className="add-product__checkbox-group">
                <div className="add-product__checkbox-item">
                  <Checkbox
                    label={"sm"}
                    checked={true}
                    className="main-color"
                  />
                </div>
                <div className="add-product__checkbox-item">
                  <Checkbox
                    label={"md"}
                    checked={false}
                    className="main-color"
                  />
                </div>
                <div className="add-product__checkbox-item">
                  <Checkbox
                    label={"lg"}
                    checked={false}
                    className="main-color"
                  />
                </div>
              </div>
            </div> */}
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

export default AddProduct;
