import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const Tag = () => {
    const [tag, setTag] = useState('cat')
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    const clickHandler = () => {
        fetchData();
    }


    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=xuC5rdv9fdZLzJszrylKrSGtfnO9B4TB&tag=${tag}`;
        const { data } = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);

    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="w-1/2 bg-blue-600 mt-7 flex flex-col items-center gap-y-5 ">
            <h1 className="text-center font-bold text-2xl mt-5 uppercase underline">Random {tag} Gif</h1>
            {
                loading ? (<Spinner />) :
                    (
                        <img src={gif} />
                    )
            }

            <input
                type="text"
                value={tag}
                onChange={(e) => { setTag(e.target.value) }}
                className="w-10/12 bg-yellow-50 text-center text-xl font-bold py-2 rounded-lg "
            />

            <button onClick={clickHandler} className="w-10/12 bg-yellow-200 text-center text-xl font-bold py-2 rounded-lg mb-[15px] ">Generate</button>


        </div>
    )
}
export default Tag;