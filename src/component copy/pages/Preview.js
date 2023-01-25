import { useState, useEffect } from "react";
import instance from "./BaseURL";
import { useSelector } from "react-redux";


const Preview = () => {
    const [details,setDetails] = useState([]);
    const { farmer_id } = useSelector((state) => state.farmer);
    console.log(farmer_id);
    useEffect(() => {
        instance.get(`/farmer/all`,{
        headers: {
            "Access-Control-Allow-Origin":""
        }
        })
        .then((response) => {
            console.log(response);
            setDetails(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        })
    }, []);

    var Id = "S0089";
    const filtereddetail = details.filter(
        (item) => item.farmerDetails.farmerId === Id
    );
    console.log("m",filtereddetail); 
    console.log(filtereddetail);

    return (
        <section>
            <h1>Preview</h1>
            <h4><strong>Farmer Details</strong></h4>
            {filtereddetail.map((item, index)=> {
                return (
                    <ul>
                        <li>Farmer ID : {item.farmerDetails.farmerId}</li>
                        <li>Farmer name : {item.farmerDetails.farmerName}</li>
                        <li>Father/Husband Name : {item.farmerDetails.fatherName}</li>
                        <li>Gender : {item.farmerDetails.gender}</li>
                        <li>Age : {item.farmerDetails.age}</li>
                        <li>Phone Number : {item.farmerDetails.phoneNumber}</li>
                        <li>Whatsapp Number : {item.farmerDetails.whatsappNumber}</li>
                        <li>Local / Outsider : {item.farmerDetails.residentialType}</li>
                        <li>Village : {item.farmerDetails.village}</li>
                        <li>Panchayat : {item.farmerDetails.panchayat}</li>
                        <li>Union : {item.farmerDetails.union}</li>
                        <li>District : {item.farmerDetails.district}</li>
                        <li>State : {item.farmerDetails.state}</li>
                    </ul> 
                )})}
                <h4><strong>Land Details</strong></h4>
                {filtereddetail.map((item,index) => {
                    if(item.landDetails === []){
                        console.log("no");
                    } else {
                        <table border="1" className="table">
                            <thead>
                              <tr className="table-head-row">
                                <th>Farmer Id</th>
                                <th>Onwer ID</th>
                                <th>Land ID</th>
                                <th>category</th>
                                <th>Area</th>
                                <th>Supervisor ID</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filtereddetail.map((farmer) =>
                                farmer.landDetails.map((land) => (
                                  <tr key={land.landId}>
                                    <td>{farmer.farmerDetails.farmerId}</td>
                                    <td>{land.ownerId}</td>
                                    <td> {land.landId} </td>
                                    <td>{land.category}</td>
                                    <td>{land.area}</td>
                                    <td>{land.supervisorId}</td>
                                  </tr>
                                ))
                              )}
                    </tbody>
                </table>
                     }
                })}
                <h4><strong>Crop Details</strong></h4>
               
                <table border="1" className="table">
                    <thead>
                        <tr className="table-head-row">
                            <th>Farmer Id</th>
                            <th>Land Type</th>
                            <th>Crop Name</th>
                            <th>Crop Type</th>
                            <th>Brand</th>
                            <th>Area</th>
                            <th>Cropped At</th>
                            <th>Harvest period</th>
                            <th>Seeding Type</th>
                            <th>Organic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtereddetail.map((farmer) =>
                            farmer.cropDetails.map((crop) => (
                                  <tr>
                                    <td>{farmer.farmerDetails.farmerId}</td>
                                    <td>{crop.type}</td>
                                    <td>{crop.name}</td>
                                    <td>{crop.variety}</td>
                                    <td>{crop.brand}</td>
                                    <td>{crop.area}</td>
                                    <td>{crop.croppedAt}</td>
                                    <td>{crop.harvestPeriod}</td>
                                    <td>{crop.seedingType}</td>
                                    <td>{crop.organic}</td>
                                  </tr>
                                ))
                              )}
                    </tbody>
                </table>
                <h4><strong>Garden Details</strong></h4>
                <table border="1" className="table">
                    <thead>
                        <tr className="table-head-row">
                            <th>Farmer Id</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Variety</th>
                            <th>Brand</th>
                            <th>Area</th>
                            <th>Count</th>
                            <th>Organic</th>
                            <th>Age</th>
                            <th>Selling Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtereddetail.map((farmer) =>
                            farmer.gardenDetails.map((garden) => (
                                  <tr>
                                    <td>{farmer.farmerDetails.farmerId}</td>
                                    <td>{garden.type}</td>
                                    <td>{garden.name}</td>
                                    <td>{garden.variety}</td>
                                    <td>{garden.brand}</td>
                                    <td>{garden.area}</td>
                                    <td>{garden.count}</td>
                                    <td>{garden.organic}</td>
                                    <td>{garden.age}</td>
                                    <td>{garden.sellingPeriod}</td>
                                  </tr>
                                ))
                              )}
                    </tbody>
                </table>
                <h4><strong>Livestock Details</strong></h4>
                <table border="1" className="table">
                    <thead>
                        <tr className="table-head-row">
                            <th>Farmer Id</th>
                            <th>Type</th>
                            <th>Breed</th>
                            <th>Name</th>
                            <th>Count</th>
                            <th>Season</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtereddetail.map((farmer) =>
                            farmer.livestockDetails.map((liv) => (
                                  <tr>
                                    <td>{farmer.farmerDetails.farmerId}</td>
                                    <td>{liv.type}</td>
                                    <td>{liv.breed}</td>
                                    <td>{liv.name}</td>
                                    <td>{liv.count}</td>
                                    <td>{liv.season}</td>
                                  </tr>
                                ))
                              )}
                    </tbody>
                </table>
                <h4><strong>Machine Details</strong></h4>
                <table border="1" className="table">
                    <thead>
                        <tr className="table-head-row">
                            <th>Farmer Id</th>
                            <th>Type</th>
                            <th>SubType</th>
                            <th>Attachment</th>
                            <th>Brand</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtereddetail.map((farmer) =>
                            farmer.machineDetails.map((machine) => (
                                  <tr>
                                    <td>{farmer.farmerDetails.farmerId}</td>
                                    <td>{machine.type}</td>
                                    <td>{machine.subType}</td>
                                    <td>{machine.attachments}</td>
                                    <td>{machine.brand}</td>
                                    <td>{machine.count}</td>
                                  </tr>
                                ))
                              )}
                    </tbody>
                </table>
        </section>
    );
}

export default Preview;