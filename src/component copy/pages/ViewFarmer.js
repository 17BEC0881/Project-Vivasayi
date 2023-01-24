import axios from "axios";
import { useState, useEffect } from "react";
import { farmerActions } from "../../store/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./ViewFarmer.module.css";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import Layout from "../Layout/Layout";

const ViewFarmer = () => {
  const api = "https://34b9-49-204-116-70.in.ngrok.io";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [farmer, setFarmer] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/farmer/all`)
      .then((response) => {
        console.log(response);
        setFarmer(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  }, []);

  const editHandler = (Id) => {
    const newEditdata = farmer.filter(
      (input) => input.farmerDetails.farmerId === Id
    );
    console.log("edit", newEditdata);
    dispatch(farmerActions.edit_data(newEditdata));
    navigate("/farmerdetails");
  };

  const deleteHandler = (Id,e) => {
    const newdata = farmer.filter(
      (input) => input.farmerDetails.farmerId === Id
    );
    var f_id;
    {
      newdata.map((input) => (f_id = input.farmerDetails.farmerId));
    }
    // console.log(f_id);
    axios
      .delete(`${api}/farmer/id/${f_id}`)
      .then((response) => {
        console.log(response);
        alert("Are you want to delete??");
        if (response.status === 200) {
          alert("Delete successful");
          navigate("/farmerdetails");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <Layout>
      <div className={classes.land}>
        <div className={classes.landcontainer}>
          <h4>Farmer Details</h4>
          <table border={1}>
            <thead>
              <tr>
                <th>Farmer Id</th>
                <th>Name</th>
                <th>Father Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Whatsapp Number</th>
                <th>Village</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {farmer.map((input) => (
                <tr key={input.farmerDetails.farmerId}>
                  <td>{input.farmerDetails.farmerId}</td>
                  <td>{input.farmerDetails.farmerName}</td>
                  <td>{input.farmerDetails.fatherName}</td>
                  <td>{input.farmerDetails.age}</td>
                  <td>{input.farmerDetails.gender}</td>
                  <td>{input.farmerDetails.phoneNumber}</td>
                  <td>{input.farmerDetails.whatsappNumber}</td>
                  <td>{input.farmerDetails.village}</td>
                  <td>
                    <MdEdit
                      size={15}
                      style={{ margin: "5px" }}
                      onClick={() => editHandler(input.farmerDetails.farmerId)}
                    />
                    <AiTwotoneDelete
                      size={15}
                      style={{ margin: "5px" }}
                      onClick={(e) =>
                        deleteHandler(input.farmerDetails.farmerId)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ViewFarmer;