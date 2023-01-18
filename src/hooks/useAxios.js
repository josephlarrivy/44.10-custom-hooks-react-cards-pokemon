import React, { useEffect, useState } from "react";
import axios from "axios";
import { uuid } from "uuidv4";



function useAxios(url) {
    const [response, setResponse] = useState();
    // const [url, setUrl] = useState(incomingUrl)

    const makeRequest = async () => {
        try {
            let res = await axios.get(url);
            setResponse(res)
            // console.log(url)
        } catch (e) {
            return console.log(e)
        };
    };
    // console.log(response)
    return [response, makeRequest]
}

export default useAxios;