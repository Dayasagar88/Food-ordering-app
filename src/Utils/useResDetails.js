import { useEffect, useState } from "react"

const useResDetails = (resList) => {

    const [resDeatils , setResDetails] = useState(null);

    useEffect(() => {
        setResDetails(resList);

        return () => {
            clearInterval(setResDetails());
        }
    },[])

    return resDeatils;
}


export default useResDetails;