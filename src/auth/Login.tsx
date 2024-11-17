import { useForm, SubmitHandler } from "react-hook-form";

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

  const onSubmit: SubmitHandler<LoginDetails> = (data) => console.log(data);

  return (
    <div className="max-w-6xl mx-auto text-primary">
      <div className="card shadow-md mx-auto w-full max-w-screen-sm p-5 rounded-md">
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
              className="w-full p-1 mt-1"
              placeholder="Enter your email"
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
              className="w-full p-1 mt-1"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 font-light">
                password is required
              </span>
            )}
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="btn bg-blue-600 rounded-md px-3 py-1 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
