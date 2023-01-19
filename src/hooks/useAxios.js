import React, { useEffect, useState } from "react";
import axios from "axios";
import { uuid } from "uuidv4";



// const useAxios = () => {
//     const [response, setResponse] = useState(null);

//     const makeRequest = async (url) => {
//         console.log(`URL: ${url}`)

//         try {
//             console.log('making request')
//             let res = await axios.get(url);
//             setResponse(res)

//         } catch (e) {
//             return console.log(e)
//         };
//     };
    
//     useEffect(() => {
//         makeRequest();
//     }, []);
//     // console.log(response)
//     return [response, makeRequest]
// }

// export default useAxios;


const useAxios = () => {

    let res;

    const makeRequest = async (url) => {
        console.log(`URL: ${url}`)

        try {
            console.log('making request')
            res = await axios.get(url);
            console.log(res)
        } catch (e) {
            return console.log(e)
        };

        // console.log(res)
        return res
    };

    useEffect(() => {
        makeRequest();
    }, []);

    return [res, makeRequest]
}

export default useAxios;