import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import logo from "../assets/cool.png";
import { useNavigate } from "react-router";
import {
  registerUser,
  registerStart,
  registerSuccess,
  registerFailure,
} from "../features/RegisterSlice";
import { RootState } from "../store/Store";
import { Link } from "react-router-dom";

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headingControls = useAnimation();
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      console.log("Por favor, complete todos los campos");
      console.log({
        username,
        email,
        password,
        confirmPassword,
      });
      return;
    }

    if (password !== confirmPassword) {
      console.log("Las contraseñas no coinciden");
      console.log({
        username,
        email,
        password,
        confirmPassword,
      });
      return;
    }

    dispatch(registerUser(formData));
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    navigate("../filter");
  };

  useEffect(() => {
    const startAnimation = async () => {
      await headingControls.start({
        x: 0,
        transition: { duration: 0.4, delay: 0.5 },
      });
    };

    startAnimation();
  }, [headingControls]);

  const { isLoading, error } = useSelector(
    (state: RootState) => state.register
  );

  return (
    <motion.div initial={{ y: 20, opacity: 0 }}
		animate={{ y: 0, opacity: 2 }}
		exit={{ y: -10, opacity: 0 }}
		transition={{ duration: 0.6 }} >
      <div className="flex flex-col items-center justify-center h-screen m-8">
        <img src={logo} alt="Cool-LOGO" className="flex w-[17vw] ml-24" />
        <form className="w-full max-w-md p-6 ml-20" onSubmit={handleSubmit}>
          <div className="text-2xl mb-6">
            <motion.h2
              initial={{ x: "-10%" }}
              animate={headingControls}
              className="font-poppy text-5xl"
            >
              
            </motion.h2>
            <motion.h3
              className="font-poppy text-3xl"
            >
              Hello! Register to get started!
            </motion.h3>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
            />
          </div>

            
          <div className="flex flex-col">
            
            <button
              type="submit"
              className="bg-orange-700 w-full hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
              disabled={isLoading}
              >
              {isLoading ? "Registering..." : "Register"}
            </button>
              

            <span className="border-t border-gray-300 w-full text-center my-2">
              {" "}
              Or Login with
            </span>

            <div className="flex">
              <button className="flex items-center justify-center text-blue-600 hover:text-blue-900 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2">
                <span className="border border-gray-300 rounded-md bg-white p-3">
                  <FaFacebook className="text-xl" />
                </span>
              </button>
              <button className="flex items-center justify-center text-red-600 hover:text-red-700 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <span className="border border-gray-300 rounded-md bg-white p-3">
                  <FaGoogle className="text-xl" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <p>
              Already have an account?{" "}
              <span
                className="text-orange-600 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
