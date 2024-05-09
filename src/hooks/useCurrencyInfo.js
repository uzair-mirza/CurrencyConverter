import { useEffect, useState} from "react";

function useCurrencyInfo (currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.fastforex.io/fetch-all?api_key=521dfb5552-df75728101-sck91l`)
        .then((res) => res.json())
        // .then((res) => console.log(res.results))
        .then((res) => setData(res.results))
        console.log(data)
    } , [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;