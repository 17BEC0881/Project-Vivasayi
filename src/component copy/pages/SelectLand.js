import React, { useState } from "react";
import axios from "axios";
import classes from "./land.module.css";
import { useEffect } from "react";
import LandTable from "./LandTable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { landActions } from "../../store/landStore";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import instance from "./BaseURL";

const SelectLand = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { landData } = useSelector((state) => state.land);
  const selected = useSelector((state) => state.land.selectedLand);
  const [area, setArea] = useState(selected[0].area);
  const [interestedFor, setInterestedFor] = useState("takenLease");
  const [addOns, setAddOns] = useState("None");
  const [supervisorID, setSupervisorID] = useState(selected[0].ownerid);
  const [landId, setLandId] = useState(selected[0].landid);

  const { farmer_id } = useSelector((state) => state.farmer);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(area, interestedFor, addOns, supervisorID, selected);

    // const userData = {
    //   farmerId: "JEY0002",
    //   area: area,
    //   category: interestedFor,
    //   addons: addOns,
    //   supervisorId: supervisorID,
    // };

    await instance({
      url: "/land/rent",
      method: "post",
      data: {
        rentLandDetails: [
          {
            // farmerId: farmer_id,

            farmerId: farmer_id[0],
            landId: selected[0].landid,
            ownerId: selected[0].ownerid,
            area: area,
          },
        ],
      },
    })
      .then((response) => {
        console.log("rentpost", response);

        const data = {
          farmerId: supervisorID,
          // farmerId: selected[0].farmerid,
          landId: landId,
          supervisorId: farmer_id[0],
          area: area,
          category: "takenLease",
        };
        dispatch(landActions.createLand(data));
      })
      .catch((error) => {
        console.log("renterror", error);
      });

    //post format => const landDetails: [
    //     {
    //       farmerId: "SWE0007",
    //       area: area,
    //       category: interestedFor,
    //       wasteland: wasteland,
    //       addons: addOns,
    //       supervisorId: supervisorID,
    //     },
    //   ]

    // const data = {
    //   farmerId: "ABI0021",
    //   // farmerId: selected[0].farmerid,
    //   landId: selected[0].landid,
    //   ownerId: selected[0].ownerid,
    // };
    // dispatch(landActions.createLand(data));

    navigate("/land");
  };

  return (
    <Layout>
      <div className={classes.login}>
        <h1>Add Land</h1>

        <form>
          <div>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                {/* <option value="leasedLand"> leasedLand </option> */}
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>

            <div>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <input
                placeholder="supervisorID"
                value={supervisorID}
                onChange={(e) => setSupervisorID(e.target.value)}
              />
              {/* <select
                  disabled
                  name="states"
                  id="states"
                  onChange={(e) => setAddOns(e.target.value)}
                >
                  <option value="">addOn </option>
                  {/* {farmingList.map((state) => ( */}
              {/* <option
                    key={selectedLand.landid}
                    value={selectedLand.farmerid}
                  >
                    {selectedLand.farmerid}
                  </option>
                  ))}
                </select> */}
            </div>

            <div>
              {/* <select
                  name="states"
                  id="states"
                  onChange={(e) => setSupervisorID(e.target.value)}
                >
                  <option value="">supervisorId </option>
                  {supervisor}
                  {/* {selected.map((state) => (
                    <option key={state.landid} value={state.landid}>
                      {state.farmerid}
                    </option>
                  ))} */}
              {/* </select> */}
            </div>

            <div>
              <input
                placeholder="landID"
                value={landId}
                onChange={(e) => setLandId(e.target.value)}
              />
              {/* <select
                  name="states"
                  id="states"
                  onChange={(e) => setLandid(e.target.value)}
                >
                  <option value="">land Id </option>
                  {list.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select> */}
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </div>
        </form>

        {/* <LandTable /> */}
      </div>
    </Layout>
  );
};

export default SelectLand;
