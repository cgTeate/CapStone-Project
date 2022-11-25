import axios from 'axios'
const url = process.env.NEXT_PUBLIC_SPRINGBOOT_API_URL
import fetch from 'unfetch';

// const checkStatus = res => {
//     if (res.ok) {
//         return res;
//     }
//     // convert non-2xx HTTP responses into errors:
//     const error = new Error(response.statusText);
//     error.res = res;
//     return Promise.reject(error);
// }

// export const getAllKicks = () =>
//     fetch(`${url}/api/products/category?category=Kicks`)
//         .then(checkStatus);

export const getUserData = async () => {
    try {
        const res = await axios.get(`${url}/api/sellers`);
        return res;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
export const getProducts = async () => {
    try {
        const res = await axios.get(`${url}/api/products/allproducts`);
        console.log(res)
        return res;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
export const getKicks = async () => {
    try {
        const res = await axios.get(`${url}/api/products/category?category=Kicks`);
        console.log(res)
        return res;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
export const getApparel = async () => {
    try {
        const res = await axios.get(`${url}/api/products/category?category=Apparel`);
        console.log(res)
        return res;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
// export async function getKicksData () {
//     try {
//         //for M1 Chip
//         // const res = await fetch(`http://localhost:8080/api/registration`,
//         const res = await axios(
//         {
//           url: `${url}/api/products/category?category=Kicks`,
//           method: 'GET',
//           headers: {'Content-Type': 'application/json'},
//         }
//         );
//         if(res.status == 200)
//         {
//             console.log("Got Kicks");
//             return res;
//         }
//         else{
//             console.log("Can't access Kicks");
//         }
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
// export async function getApparelData () {
//     try {
//         //for M1 Chip
//         // const res = await fetch(`http://localhost:8080/api/registration`,
//         const res = await axios(
//         {
//           url: `${url}/api/products/category?category=Apparel`,
//           method: 'GET',
//           headers: {'Content-Type': 'application/json'},
//         }
//         );
//         if(res.status == 200)
//         {
//             console.log("Got Apparel");
//             console.log(res)
//             // return res.data;
//         }
//         else{
//             console.log("Can't access Apparel");
//         }
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
export async function registerUser (values) {
    try {
        //for M1 Chip
        // const res = await fetch(`http://localhost:8080/api/registration`,
        const res = await fetch(`${url}/api/registration`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body:
          JSON.stringify({
            firstName: values.firstname,
            lastName: values.lastname,
            username: values.email,
            password: values.password,
            role: values.usertype,
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
        console.log(res)

        if(res.status == 200)
        {
            console.log("Registration successful");
        }
        else{
            console.log("Registration failed");
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};


export async function loginUser (values) {
    try {
        //for M1 Chip
        // const res = await fetch(`http://localhost:8080/login`,
        const res = await fetch(`${url}/login`,
        {
          method: 'POST',
          headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'},
            // below is template for subsequent http requests
        //   headers: new Headers({
        //     'Authorization': 'Basic '+btoa('username:password'), 
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }), 
          body:
          JSON.stringify({
            username: values.email,
            password: values.password,
            }),
        });
        console.log(res)
        if(res.status == 200)
        {
            console.log("Login successful");
            const token = res.headers.get('Authorization')
            if(!sessionStorage.getItem('access_Token') || token!==sessionStorage.getItem('access_Token')){
                sessionStorage.setItem('access_Token', `${token}`); // will be deleted when website is closed 
              }
            
            // localStorage.setItem('refresh_Token', `${token}`) // will not be deleted when website is closed
            // localStorage.setItem('refresh_Token', JSON.stringify(`${token}`)) // will not be deleted when website is closed
        }
        // else{
        //     console.log("Incorrect email or password");
        // }
        return res;
    } catch (error) {
        // Handle Error Here
        console.error(error.message);
    }
};
export const logoutUser = async () => {
    try {
        const access_Token =  sessionStorage.getItem('access_Token')

        if(!access_Token) {
            console.log("No access token")
            return;
        }
        const res = await axios.delete(`${url}/api/websiteuser/logout`, {
            headers: {
                Authorization: access_Token,
            }
        });
        return res.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
export const fetchUser = async () => {
    try {
        const access_Token =  sessionStorage.getItem('access_Token')

        if(!access_Token) {
            console.log("No access token")
            return;
        }
        const res = await axios.get(`${url}/api/websiteuser/username`, {
            headers: {
                Authorization: access_Token,
            }
        });
        return res.data;
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