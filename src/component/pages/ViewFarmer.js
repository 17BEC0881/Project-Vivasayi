import axios from 'axios';

const ViewFarmer = () => {

    axios.get("https://091f-49-204-138-20.in.ngrok.io/farmer/all")
        .then((response) => {
            console.log(response);
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

    return (
        <section>
            <h3>Farmer Details</h3>
        </section>
    );
}

export default ViewFarmer;