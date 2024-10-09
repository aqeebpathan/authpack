import { BadgeCheck, LucideLoaderPinwheel } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { verifyEmail, error, isLoading, user, resendVerification, message } =
    useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendCode = async () => {
    try {
      await resendVerification(user.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code.every((digit) => digit != "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  if (!user) {
    return navigate("/login");
  }

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="p-4">
        <div className="flex justify-center mb-2">
          <div className="border-2 border-neutral-200 p-2 rounded-lg">
            <BadgeCheck size={20} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold tracking-wide py-3">
          Email verification
        </h2>
        <p className="text-[#7d7f86] text-center tracking-wide pb-3 text-md">
          We sent verification code to <br />{" "}
          <span className="text-black font-medium">{user.email}</span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full sm:min-w-80 flex flex-col gap-y-4 mt-4"
        >
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="6"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-9 h-10 sm:w-12 sm:h-[3.25rem] text-center text-2xl sm:text-3xl font-bold border-2 border-neutral-300 rounded-lg focus:outline-[#165ef0]"
              />
            ))}
          </div>

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
              "Verify email"
            )}
          </button>
        </form>

        <div className="my-4">
          <p className="text-sm text-[#7d7f86]">
            Didn&apos;t receive the email?{" "}
            <span
              onClick={handleResendCode}
              className="text-[#165ef0] font-medium cursor-pointer hover:underline"
            >
              Resend code
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
