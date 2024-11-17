import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

type Inputs = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();
  

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axiosInstance.post("/auth/register", data);

      if (res.data) {
        toast.success("user registered successfully");
        navigate("/login");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="card shadow-md mx-auto w-full max-w-md p-5 rounded-md">
        <div className="flex items-center justify-center mb-3">
          <h2 className="text-primary font-bold text-2xl">Registration Form</h2>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="" className="text-pretty text-gray-500 font-bold">
              Name:
            </label>
            <input
              type="text"
              className="w-full p-1 mt-1"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 font-light">Name is required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="" className="text-pretty text-gray-500 font-bold">
              Email:
            </label>
            <input
              type="email"
              className="w-full p-1 mt-1"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 font-light">Email is required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="" className="text-pretty text-gray-500 font-bold">
              Password:
            </label>
            <input
              type="password"
              className="w-full p-1 mt-1"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 font-light">
                Password is required
              </span>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="avatar"
              className="text-pretty text-gray-500 font-bold"
            >
              Avatar:
            </label>
            <input
              id="avatar"
              type="file"
              className="w-full p-1 mt-1"
              {...register("avatar", { required: false })}
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="" className="text-pretty text-gray-500 font-bold">
              Confirm Password:
            </label>
            <input
              type="password"
              className="w-full p-1 mt-1"
              placeholder="Confirm your password"
              {...register("confirm_password", { required: true })}
            />
            {errors.confirm_password && (
              <span className="text-red-500 font-light">
                Confirm your Password
              </span>
            )}
          </div> */}
          <div className="flex items-center justify-end mt-5">
            <button
              type="submit"
              className="btn bg-primary w-full rounded-md px-3 py-1 text-white"
            >
              Submit
            </button>
          </div>
          <div className="flex items-center justify-center mt-3">
            <p>
              Already Have An Account?{" "}
              <NavLink to={"/login"} className={"text-primary"}>
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
