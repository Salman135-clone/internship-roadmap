import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import AxiosInstance from "../api/AxiosInstance";
import { toast } from "react-toastify";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (formdata, resetForm) => {
    const { username, email, password } = formdata;
    if (!username.trim() || !email.trim() || !password.trim()) {
      toast.warn("Fields cannot be empty");
      return;
    }
    setLoading(true);
    try {
      const res = await AxiosInstance.post("/signup", {
        username,
        email,
        password,
      });
      if (res.status === 200 || res.status === 201) {
        toast.success("Register Successful");
        resetForm();
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <RegisterForm loading={loading} signup={signup} />
    </div>
  );
};

export default Signup;
