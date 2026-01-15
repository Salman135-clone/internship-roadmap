import React from "react";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Fetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReq = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setTimeout(() => {
          setData(data);
          setIsLoading(false);
          toast.success("Data Retrive Successfully", {
            toastId: "success1",
          });
        }, 6000);
      } catch (err) {
        toast.warn(err);
        setIsLoading(false);
      }
    };
    fetchReq();
  }, []);

  return (
    <div>
      <h1 className="mb-4">Fetch Method</h1>
      {isLoading ? (
        <Loader />
      ) : data?.users?.length > 0 ? (
        data?.users?.map((user) => (
          <div key={user.id} className="mb-4">
            <p>{`Name: ${user.firstName} ${user.lastName} `}</p>
          </div>
        ))
      ) : (
        <p>No User Data Found</p>
      )}
    </div>
  );
};

export default Fetch;
