import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cropActions } from "../../store/cropDetailsReducer";
import classes from "./CropForm.module.css";

const CropTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addCrop } = useSelector((state) => state.crop);
  console.log("addCrop", addCrop);

  const editHandler = (item, index) => {
    console.log("editinput", item.croppedAt);

    const editData = {
      index: index,
      farmerId: item.farmerId,
      area: item.area,
      type: item.type,
      name: item.name,
      variety: item.variety,
      brand: item.brand,
      croppedAt: item.croppedAt,
      organic: item.organic,
      seedingType: item.seedingType,
      harvestPeriod: item.harvestPeriod,
    };

    console.log("editData", editData);

    dispatch(cropActions.crop_edit_data(editData));

    navigate("/cropedit");
  };
  return (
    <div className={classes.crop}>
      <h2>Crop Details Table </h2>
      {/* {show &&  */}
      <table>
        <tr>
          <th>Farmer Id</th>
          <th>Type</th>
          <th>Name</th>
          <th>Variety</th>
          <th>Brand</th>
          <th>Area</th>
          <th>Cropped At</th>
          <th>Seeding Type</th>
          <th>Organic</th>
          <th>harvest Period</th>
          <th>Action</th>
        </tr>
        {addCrop.map((item, index) => {
          // console.log('item',item.farmerId)
          return (
            <tr key={index}>
              <td>{item.farmerId}</td>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.variety}</td>
              <td>{item.brand}</td>
              <td>{item.area}</td>
              <td>{item.croppedAt}</td>
              <td>{item.seedingType}</td>
              <td>{item.organic.toString()}</td>
              <td>{item.harvestPeriod}</td>
              <td>
                <button
                  onClick={() => {
                    editHandler(item, index);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CropTable;
