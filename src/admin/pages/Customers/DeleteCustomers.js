import React from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { db, auth } from "../../../firebase";
// import AdminLoading from "../../components/AdminLoading";

const DeleteCustomers = () => {
  // const history = useHistory();
  // const params = useParams();

  // const fetchUsers = async () => {
  //   try {
  //     // await auth.signInWithEmailAndPassword;
  //     try {
  //       await db.collection("users").doc(params.id).delete();
  //       history.replace("/user");
  //     } catch (error) {
  //       console.log("User delete collection error =>>>", error);
  //     }
  //   } catch (error) {
  //     console.log("User delete error =>>>", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <div>
      <h1 className="page-header">Deleteting customers</h1>
      <div className="card">
        <div className="card__body">
          I can't delete product
          {/* <AdminLoading /> */}
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomers;
