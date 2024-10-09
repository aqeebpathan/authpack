import {
  ArrowLeft,
  Fingerprint,
  LucideLoaderPinwheel,
  MailOpen,
} from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, forgotPassword, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  const openMailApp = (e) => {
    e.preventDefault();
    const mailtoLink = "mailto:";

    // Open the mail client
    window.location.href = mailtoLink;
  };
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="p-4">
        <div className="flex justify-center mb-2">
          <div className="border-2 border-neutral-200 p-2 rounded-lg">
            {!isSubmitted ? <Fingerprint size={20} /> : <MailOpen size={20} />}
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold tracking-wide py-3">
          {!isSubmitted ? "Forgot password?" : "Check your email"}
        </h2>
        <p className="text-[#7d7f86] text-center tracking-wide pb-3 text-md">
          {!isSubmitted ? (
            "No worries, we'll send you reset instructions."
          ) : (
            <>
              We sent a password reset link to <br />
              <span className="text-black font-medium">{email}</span>
            </>
          )}
        </p>
        <form
          onSubmit={!isSubmitted ? handleSubmit : openMailApp}
          className="w-full sm:min-w-80 flex flex-col gap-y-4 mt-4"
        >
          {!isSubmitted && (
            <Input
              label="Email"
              type="email"
              placeholder="johndoe@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

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
            ) : !isSubmitted ? (
              "Request reset"
            ) : (
              "Open email app"
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

export default ForgotPasswordPage;
