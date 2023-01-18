import { useEffect, useState } from "react"

export const useFetch = (url) => {


    const [data, setData] = useState(null)

    useEffect(() => {
        const FetchData = async () => {
            const res = await fetch(url)

            const json = await res.json();
           const rv = json.reverse()
            setData(rv)

            
        }

        FetchData();
    }, [url])

  
    return { data }
};