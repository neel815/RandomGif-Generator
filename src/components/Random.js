import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imagesrc = data.data.images.downsized_large.url;
    setGif(imagesrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function changeHandler() {
    fetchData();
  }

  return (
    <div className="w-4/5 max-w-md bg-white shadow-md rounded-lg border border-gray-200 flex flex-col items-center gap-y-6 p-6">
      <h1 className="text-xl font-semibold text-gray-700">Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Random Gif" className="w-full rounded-lg" />
      )}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
        onClick={changeHandler}
      >
        Generate New Gif
      </button>
    </div>
  );
};

export default Random;
