import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";


const Random = () =>{
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    const clickHandler = () => {
        fetchData();
    }

   
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=xuC5rdv9fdZLzJszrylKrSGtfnO9B4TB&tag=&rating=g`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);

    }
    useEffect(()=>{
      fetchData();
    },[])

    
    
    return(
       
        <div className="w-1/2  bg-green-500 mt-5 flex flex-col items-center gap-y-5 ">
         <h1 className="text-2xl text-center font-bold mt-[15px] underline uppercase">A Random Gif</h1>
         {
            loading ? (<Spinner />): 
            (
                <img src={gif}  />
            )
         }
         
         <button onClick={clickHandler} className="w-10/12 bg-yellow-200 text-center text-xl font-bold py-2 rounded-lg mb-[15px] ">Generate</button>
        </div>
        
    )
}
export default Random;