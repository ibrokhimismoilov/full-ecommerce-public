import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { db } from "../../../firebase";
import Button from "../../../components/Button";
import AdminLoading from "../../components/AdminLoading";
// import AdminLoading from "../components/AdminLoading";

const userRole = ["user", "admin"];

const initialState = {
  firstName: null,
  lastName: null,
  phone: null,
  email: null,
  password: null,
  update: null,
  role: userRole[0],
};

const EditCustomers = () => {
  const params = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState(initialState);

  const fetchCustomer = async () => {
    try {
      setLoading(true);
      const data = await db.collection("users").doc(params.id).get();
      setCustomer({ ...data.data(), id: data.id });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setCustomer(null);
      console.log("Products error =>>>", error);
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCustomer((state) => ({ ...state, [name]: value }));
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    db.collection("users")
      .doc(params.id)
      .update({
        ...customer,
        update: new Date(),
      })
      .then(() => {
        setLoading(false);
        history.replace("/customers");
      })
      .catch((error) => {
        setLoading(false);
        console.log("DB collection update error", error);
      });
  };

  // console.log(customer);

  return (
    <div className="customers">
      <h1 className="page-header">Edit Customers</h1>
      {loading ? (
        <AdminLoading />
      ) : (
        <form className="customers__add-form row" onSubmit={updateHandler}>
          <div className="col-sm-12 col-md-6 col-4">
            <label>First name</label>
            <input
              onChange={inputHandler}
              type="text"
              name="firstName"
              value={customer.firstName}
              placeholder="First name"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-4">
            <label>Last name</label>
            <input
              onChange={inputHandler}
              type="text"
              name="lastName"
              value={customer.lastName}
              placeholder="Last name"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-4">
            <label>Phone</label>
            <input
              onChange={inputHandler}
              type="text"
              name="phone"
              value={customer.phone}
              placeholder="Phone"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-4">
            <label>Role</label>
            <select name="role" value={customer.role} onChange={inputHandler}>
              {userRole.map((item, index) => {
                return (
                  <option key={index} value={item.toLowerCase()}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-12 col-md-6 col-4">
            <label>Email</label>
            <input
              onChange={inputHandler}
              type="text"
              name="email"
              disabled={true}
              readOnly={true}
              value={customer.email}
              placeholder="Email"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-4">
            <label>Password</label>
            <input
              onChange={inputHandler}
              type="text"
              name="password"
              disabled={true}
              readOnly={true}
              value={customer.password}
              placeholder="Password"
            />
          </div>

          <div className="col-12">
            <Button type="submit" size="sm" backgroundColor="green">
              Update
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditCustomers;
