import react, { useEffect, useState } from "react"
import API_KEY from "./keys"
const CONTEXT_KEY="1f79ca0cb64094eca";

const useGoogleSearch = (term) =>{
    const [data,setData] = useState(null);

    useEffect(() =>{
        const fetchData = async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBgB9im_6N-z4l-SINqmfM53IuzNjzyKrw&cx=013036536707430787589:_pqjad5hr1a&gl=se&cr=se&googlehost=google.se&q=${term}&alt=json`)
            .then((response)=>response.json()).then((result)=>{
                setData(result);
            })
        }
        fetchData();
    },[term])

    return { data };
}
export default useGoogleSearch;