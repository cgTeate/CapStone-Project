import axios from 'axios'
const url = process.env.NEXT_PUBLIC_SPRINGBOOT_API_URL

export const getUserData = async () => {
    try {
        const res = await axios.get(`${url}/api/customers`);
        return res;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export async function addSellerData (values) {
    try {
        const res = await fetch(`${url}/api/sellers`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body:
          JSON.stringify({
            firstName: values.firstname,
            lastName: values.lastname,
            username: values.username,
            email: values.email,
            password: values.password,
            phoneNumber: values.phonenumber,
            dob: values.dob,
            gender: values.gender,
            address:{
                country: values.address.country,
                city: values.address.city,
                postCode: values.address.postcode,
                    }
            }),
        }
        );
        console.log(res.data)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export async function checkSeller (values) {
    try {
        const res = await fetch(`${url}/api/sellers`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body:
          JSON.stringify({
            email: values.email,
            password: values.password,
            }),
        }
        );
        console.log(res.data)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};


// export const getAllCust = () =>
//     axios.get("http://localhost:8080/api/customers")

//ANOTHER WAY TO TRY IF POSSIBLE
// import NextCors from 'nextjs-cors';

// async function customerHandler(req, res) {
//    // Run the cors middleware
//    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
//    await NextCors(req, res, {
//       // Options
//       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//       origin: "http://localhost:8080",
//       optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//    });

//    // Rest of the API logic
// //    res.json({ message: 'Hello NextJs Cors!' });

//    fetch("api/customers");
// }

// export default customerHandler()