import "./View_Employee.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import { Fragment } from "react";
import Layout from "../Layout/Layout";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

const View = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const formtoken = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get(`https://7bff-122-164-81-58.in.ngrok.io/employee/all`, formtoken)
      .then((response) => {
        console.log(response.data);
        dispatch(authActions.employee(response.data));
      });
  }, []);

  const editHandler = (event) => {};

  const deleteHandler = (event) => {};

  return (
    <Fragment>
      <Layout />
      <div className="view-employee">
        <div className="view-container">
          <h4>Employee Details</h4>
          <table border="1" className="view-table">
            <thead>
              <tr className="view-table-head-row">
                <th>S.No</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((employee) => (
                <tr key={employee.slNo}>
                  <td>{employee.slNo}</td>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.userName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>
                    <MdEdit
                      size={15}
                      style={{ margin: "5px" }}
                      // onClick={() =>
                      //    editHandler(input.farmerDetails.farmerId)}
                    />
                    <AiTwotoneDelete
                      size={15}
                      style={{ margin: "5px" }}
                      // onClick={
                      //   // (e) =>
                      //   // deleteHandler(input.farmerDetails.farmerId)
                      // }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default View;
