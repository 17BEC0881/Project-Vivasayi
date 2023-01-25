import React, { useState } from "react";
import classes from "./land.module.css";
import { useEffect } from "react";
import LandTable from "./LandTable";
import instance from "./BaseURL";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { landActions } from "../../store/landStore";
import { useSelector } from "react-redux";
import { Action } from "@remix-run/router";
import Layout from "../Layout/Layout";
import { GiDivingDagger } from "react-icons/gi";
import { farmerActions } from "../../store/reducer";
// import AvailableLeaseTable from "./AvailableLeaseTable";

const Land = () => {
  const navigate = useNavigate();
  // const farmerDetails = [];

  const dispatch = useDispatch();
  const { landData } = useSelector((state) => state.land);
  console.log(landData, "landdetails");
  const [area, setArea] = useState("");
  const [interestedFor, setInterestedFor] = useState("");
  const [addOns, setAddOns] = useState("None");
  const [supervisorID, setSupervisorID] = useState("");
  const [landId, setLandId] = useState("");

  //check
  const [ownFarmingCheck, setOwnFarmingCheck] = useState(false);
  const [takenLeaseCheck, setTakenLeaseCheck] = useState(false);
  const [initial, setInitial] = useState(false);

  const farmingList = ["interestedToClean", "cleanupTOFarm", "None"];

  useEffect(() => {
    instance
      .get(`/farmer/all`)
      .then((response) => {
        dispatch(farmerActions.farmerAll(response.data));
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
  console.log("interestedfor", interestedFor);
  useEffect(() => {
    if (interestedFor === "") {
      setInitial(true);
      setOwnFarmingCheck(false);
      setTakenLeaseCheck(false);
    } else if (
      interestedFor === "ownFarming" ||
      interestedFor === "availableForLease" ||
      interestedFor === "wasteLand"
    ) {
      setInitial(false);
      setOwnFarmingCheck(true);
      setTakenLeaseCheck(false);
    } else if (interestedFor === "takenLease") {
      setInitial(false);
      setOwnFarmingCheck(false);
      setTakenLeaseCheck(true);
    }
  }, [interestedFor]);

  const { farmer_id } = useSelector((state) => state.farmer);
  console.log("farmerid", farmer_id);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(area, interestedFor, addOns, supervisorID);

    await instance({
      url: "/land/create",
      method: "post",
      data: {
        landDetails: [
          {
            farmerId: farmer_id[0],
            // farmerId: "SWE0004",
            area: area,
            category: interestedFor,
            addons: addOns,
            supervisorId: supervisorID,
          },
        ],
      },
    })
      .then((response) => {
        console.log("res", response.data);

        //DISPATCH TO LANDdATA
        const userData = {
          farmerId: farmer_id[0],
          landId: response.data.landId,
          area: area,
          category: interestedFor,
          addons: addOns,
          supervisorId: farmer_id[0],
        };
        // if (landData === []) {
        dispatch(landActions.createLand(userData));
        // navigate("/landtable");
        // } else if (landData !== []) {
        // dispatch(landActions.createLand([userData]));
        // navigate("/landtable");
        // }
      })
      .catch((error) => {
        console.log("err", error);
      });
    setArea("");
    setSupervisorID("");
    setAddOns("");
    setInterestedFor("");
    setLandId("");
    //without using api
  };

  const landHandler = () => {
    instance
      .get(`/farmer/all`, {
        headers: {
          "Access-Control-Allow-Origin": "",
        },
      })
      .then((response) => {
        dispatch(farmerActions.farmerAll(response.data));
        // setInterestedFor("takenLease");
        navigate("/selectlandtable");
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

  const { selectedLand } = useSelector((state) => state.land);
  console.log(("selectedland", selectedLand));

  return (
    <Layout>
      <div className={classes.login}>
        <h1>Add Land</h1>
        {ownFarmingCheck && (
          <form>
            <div>
              <label>Category</label>
              <span>
                <select
                  placeholder="category"
                  value={interestedFor}
                  onChange={(e) => setInterestedFor(e.target.value)}
                >
                  <option value="choose"> category </option>
                  <option value="ownFarming"> ownFarming </option>
                  <option value="wasteLand"> wasteLand </option>
                  <option value="takenLease"> takeLease </option>
                  <option value="availableForLease"> availableForLease </option>
                </select>
              </span>
            </div>
            <div>
              <lable>Area</lable>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <label>AddOns</label>
              <select
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>SupervisorID</label>
              <input
                disabled
                placeholder="supervisorID"
                value={supervisorID}
                onChange={(e) => setSupervisorID(e.target.value)}
              />
            </div>
            <div>
              <label>LandID</label>
              <input
                disabled
                placeholder="landID"
                value={landId}
                onChange={(e) => setLandId(e.target.value)}
              />
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}

        {takenLeaseCheck && (
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
                <button type="button" onClick={landHandler}>
                  select land
                </button>
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
                <button onClick={() => submitHandler()}>submit</button>
              </div>
            </div>
          </form>
        )}
        {initial && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
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
              <select
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                placeholder="supervisorID"
                value={supervisorID}
                onChange={(e) => setSupervisorID(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="landID"
                value={landId}
                onChange={(e) => setLandId(e.target.value)}
              />
            </div>
            <div>
              <button style={{ float: "left" }} onClick={submitHandler}>
                submit
              </button>
            </div>
          </form>
        )}
      </div>
      <LandTable />
    </Layout>
  );
};

export default Land;
