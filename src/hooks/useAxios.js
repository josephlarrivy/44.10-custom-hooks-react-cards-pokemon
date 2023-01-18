import React, { useEffect, useState } from "react";
import axios from "axios";
import { uuid } from "uuidv4";



function useAxios(url) {
    const [response, setResponse] = useState(null);

    async function makeRequest() {
        try {
            let res = await axios.get(url);
            setResponse(res)
        } catch (e) {
            return console.log(e)
        };
    };
    console.log(response)
    return [response, makeRequest]
}

export default useAxios;