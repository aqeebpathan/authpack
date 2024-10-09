import { useState } from "react";

import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { LucideLoaderPinwheel } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      navigate("/email-verification");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="p-4">
        <div className="flex justify-center">
          <img src="/logo.png" alt="AuthPack" className="w-14 h-14" />
        </div>

        <h2 className="text-center text-3xl font-semibold tracking-wide py-3">
          Create Account
        </h2>
        <p className="text-[#7d7f86] text-center tracking-wide pb-3 text-md">
          Create your account to get started securely.
        </p>
        <form
          onSubmit={handleSignUp}
          className="w-full sm:min-w-80 flex flex-col gap-y-4 mt-4"
        >
          <Input
            label="Username"
            type="text"
            placeholder="johndoe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          {/* password strength meter */}

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="bg-[#165ef0] font-medium text-white text-md py-2 rounded-md mt-4"
          >
            {isLoading ? (
              <LucideLoaderPinwheel
                className="animate-spin mx-auto"
                size={22}
              />
            ) : (
              "Sign up"
            )}
          </button>
        </form>

        <div className="my-4">
          <p className="text-sm text-[#7d7f86]">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-[#165ef0] font-medium hover:underline"
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
