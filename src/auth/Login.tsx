import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type LoginDetails = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDetails>();

  const { login } = useAuth();

  const onSubmit: SubmitHandler<LoginDetails> = (data) => login(data);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="card shadow-md mx-auto w-full max-w-md p-5 rounded-md bg-white">
        <div className="flex items-center justify-center mb-3">
          <h2 className="text-primary font-bold text-2xl">Login Form</h2>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="" className="text-pretty text-gray-500 font-bold">
              Email:
            </label>
            <input
              type="email"
              className="w-full p-1 mt-1 bg-slate-100"
              placeholder="Enter your email"
              // value={"user2@mail.com"}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 font-light">Email is required</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="" className="text-pretty text-gray-500 font-bold">
              Password:
            </label>
            <input
              type="password"
              className="w-full p-1 mt-1 bg-slate-100"
              placeholder="Enter your password"
              // value={"password2"}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 font-light">
                password is required
              </span>
            )}
          </div>
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
              Don't Have Any Account?{" "}
              <NavLink to={"/register"} className={"text-primary"}>
                Register
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
