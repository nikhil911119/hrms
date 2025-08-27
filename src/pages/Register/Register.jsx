import React from "react";
import "./register.css";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import CustomInput from "../../components/CustomInput";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="register grid grid-cols-5 h-[100vh]">
      {/* left side */}
      <div className="left col-span-2">
        <div className="logo w-[200px] p-[20px]">
          <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="content text-white py-[15vh] px-[5%]">
          <h1 className="text-[40px] font-semibold mb-[40px]">
            HR Management Platform
          </h1>
          <p className="mb-[10px]">
            Manage all employees, payrolls, and other human resource operations.
          </p>
          <div className="wrapper flex gap-[20px]">
            <PrimaryButton label={"Learn More"} path={"/aboutUs"} />
            <SecondaryButton label={"Our Features"} />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="col-span-3 right px-[80px] py-[90px] me-[100px]">
        <form onSubmit={handleSubmit} className="mb-[10px]">
          <h2 className="text-[40px] font-semibold text-primary">
            Welcome to XCELTECH
          </h2>
          <span className="text-[20px] text-gray-500 mb-[20px] inline-block">
            Register Your Account
          </span>
          <div className="grid grid-cols-2 gap-[20px] mb-[30px]">
            <CustomInput
              name="firstname"
              label="First Name"
              value={formData.firstname}
              onChange={handleChange}
            />

            <CustomInput
              name="lastname"
              label="Last Name"
              value={formData.lastname}
              onChange={handleChange}
            />

            <CustomInput
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />

            <CustomInput
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
            />

            <CustomInput
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              type="password"
            />
            <CustomInput
              name="confirm_password"
              label="Confirm Password"
              value={formData.password}
              onChange={handleChange}
              type="password"
            />
          </div>
          <div className="terms flex justify-left align-middle gap-[5px] mb-[30px]">
            <input type="checkbox" className="rounded-[5px] p-[10px]" />
            <span className="text-[14px]">
              Yes, I agree to all the{" "}
              <span className="text-primary font-semibold">
                Terms and policies
              </span>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#253D90] px-[50px] py-[10px] rounded-[4px] text-white text-[16px]"
          >
            Create Account
          </button>
        </form>
        <span className="text-[14px]">
          Already Have Account?{" "}
          <Link to={"/login"} className="font-semibold text-primary">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
