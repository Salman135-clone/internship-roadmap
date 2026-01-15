import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Axios = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dummyjson.com/quotes");
        setQuote(res?.data?.quotes);
        setLoading(false);
      } catch (err) {
        toast.error("Fail to Fetch");
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  return (
    <div>
      <h1 className="mb-5">Axios Fetch Data Example</h1>

      <div>
        {loading ? (
          <Loader />
        ) : quote?.length > 0 ? (
          quote.map((q) => (
            <div className="mb-4" key={q.id}>
              <div className="flex flex-row items-center gap-5 flex-1 hover:bg-neutral-700 cursor-pointer ">
                <div className="flex flex-row gap-5">
                  <h3 className=" font-bold">Quote ID: {q.id}</h3>
                  <p className="font-bold">
                    Author:
                    <span className="font-normal text-md"> {q.author}</span>
                  </p>
                </div>
                <div>
                  <p className="p-4 text-justify">{q.quote}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Data not found</p>
        )}
      </div>
    </div>
  );
};

export default Axios;
