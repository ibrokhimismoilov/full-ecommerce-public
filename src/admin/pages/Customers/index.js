import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import Table from "../../components/Table";
import Button from "../../../components/Button";
import AdminLoading from "../../components/AdminLoading";
import { db } from "../../../firebase";
import { GetIcon } from "../../../components/GetIcon";

const customerTableHead = [
  "id",
  "First name",
  "Last name",
  "Phone",
  "Email",
  "Password",
  "Role",
  "Create time",
  "Update time",
  "EDIT / DELETE",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.firstName}</td>
    <td>{item.lastName}</td>
    <td>{item.phone}</td>
    <td>{item.email}</td>
    <td>{item.password}</td>
    <td>
      <Badge
        content={item.role.toLowerCase()}
        type={item.role === "admin" ? "success" : "primary"}
      />
    </td>
    <td>
      {item.create
        ? new Date(item.create.seconds * 1000).toLocaleString()
        : null}
    </td>
    <td>
      {item.update
        ? new Date(item.update.seconds * 1000).toLocaleString()
        : null}
    </td>
    <td>
      <div className="btn-group">
        <Link to={`/customers/edit/${item.id}`}>
          <Button backgroundColor="green" size="sm" radius="2">
            <GetIcon icon="edit" size="16" />
          </Button>
        </Link>

        {/* <Link to={`/customers/delete/${item.id}`}>
          <Button backgroundColor="red" size="sm" radius="2">
            <AiFillDelete size="16" />
          </Button>
        </Link> */}
      </div>
    </td>
  </tr>
);

const Customers = () => {
  const [costomers, setCostomers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = db.collection("users");
      const data = await response.get();
      const users = [];
      data.docs.forEach((item) => {
        users.push({ ...item.data(), id: item.id });
      });
      setCostomers(users);
    } catch (error) {
      console.log("Users error =>>>", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(costomers);

  return (
    <div className="customers">
      <h1 className="page-header">Customers</h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {costomers.length ? (
                <Table
                  limit="10"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={costomers}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              ) : (
                <AdminLoading />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
