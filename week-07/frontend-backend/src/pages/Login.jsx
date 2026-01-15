import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import AxiosInstance from "../api/AxiosInstance";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const redirect = (role) => {
    switch (role) {
      case "admin":
        return "/admin/dashboard";
      default:
        return "/";
    }
  };

  const loginHandler = async (formData) => {
    if (formData.email === "" || formData.password === "") {
      toast.error("Email and Password cannot be empty");
      return;
    }
    setLoading(true);
    try {
      const res = await AxiosInstance.post("/login", {
        email: formData.email,
        password: formData.password,
      });
      if (res.status === 200) {
        toast.success("Login Successful");
        navigate(redirect(res.data.role), { replace: true });
        login(res.data);
        localStorage.setItem("token", res.data.token);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message || "Login Failed");
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <LoginForm login={loginHandler} loading={loading} />
      </div>
    </>
  );
};

export default Login;
