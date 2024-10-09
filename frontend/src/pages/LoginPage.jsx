import { useState } from "react";

import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, LucideLoaderPinwheel } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login, isLoading, error, user } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  // Check if user isVerified if not; Redirect to '/email-verification'
  if (user && !user.isVerified) {
    return navigate("/email-verification");
  }

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="p-4">
        <div className="flex justify-center mb-2">
          <div className="border-2 border-neutral-200 p-2 rounded-lg">
            <LogIn size={20} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold tracking-wide py-3">
          Login Access
        </h2>
        <p className="text-[#7d7f86] text-center tracking-wide pb-3 text-md">
          Access your account with your credentials.
        </p>
        <form
          onSubmit={handleLogin}
          className="w-full sm:min-w-80 flex flex-col gap-y-4 mt-4"
        >
          <Input
            label="Email"
            type="email"
            placeholder="johndoe@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/forgot-password" className="text-[13px] text-[#165ef0]">
            Forgot password?
          </Link>

          {/* password strength meter */}

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="bg-[#165ef0] font-medium text-white text-md py-2 rounded-md mt-4 min-h-[38.5px]"
          >
            {isLoading ? (
              <LucideLoaderPinwheel
                className="animate-spin mx-auto"
                size={22}
              />
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="my-4">
          <p className="text-sm text-[#7d7f86]">
            Don&apos;t have an account?{" "}
            <Link
              to={"/signup"}
              className="text-[#165ef0] font-medium hover:underline"
            >
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
