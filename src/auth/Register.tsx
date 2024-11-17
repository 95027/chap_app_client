import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="max-w-6xl mx-auto text-primary">
      <div className="card shadow-md mx-auto w-full max-w-screen-sm p-5 rounded-md">
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

export default Register;
