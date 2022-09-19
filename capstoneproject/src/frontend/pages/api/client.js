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