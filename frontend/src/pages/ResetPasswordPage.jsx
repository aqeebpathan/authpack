import {
  ArrowLeft,
  LucideLoaderPinwheel,
  RectangleEllipsis,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { resetPassword, isLoading, error, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords not match");
      return;
    }

    try {
      await resetPassword(token, password);
      navigate("/login");
    } catch (error) {
      console.log(error.message || "Error restting password");
    }
  };
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="p-4">
        <div className="flex justify-center mb-2">
          <div className="border-2 border-neutral-200 p-2 rounded-lg">
            <RectangleEllipsis size={20} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold tracking-wide py-3">
          Set new password
        </h2>
        <p className="text-[#7d7f86] text-center tracking-wide pb-3 text-md">
          Must be atleast 8 characters.
        </p>
        <form
          onSubmit={handleLogin}
          className="w-full sm:min-w-80 flex flex-col gap-y-4 mt-4"
        >
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirm password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* password strength meter */}

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          {message && (
            <p className="text-sm text-green-500 text-center">{message}</p>
          )}

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
              "Reset password"
            )}
          </button>
        </form>

        <div className="my-8">
          <Link
            to="/login"
            className="text-sm text-[#7d7f86] flex justify-center items-center gap-2 font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
