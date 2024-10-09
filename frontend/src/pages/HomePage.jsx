import { useAuthStore } from "../store/authStore";

const HomePage = () => {
  const { user, logout } = useAuthStore();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-neutral-300 rounded-lg px-4">
        <h2 className="text-center text-lg font-medium my-4">Profile</h2>
        <p>
          <span className="text-[#165ef0] text-md">username/</span>{" "}
          {user.username}
        </p>
        <p>
          <span className="text-[#165ef0] text-md">email/</span> {user.email}
        </p>
        <button
          onClick={logout}
          className="text-center bg-[#165ef0] w-full rounded-md my-4 py-1 text-md text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
