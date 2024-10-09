const Input = ({ label, ...props }) => {
  return (
    <div className="group">
      <label className="text-[13px] font-medium text-gray-600 transition-colors duration-300 group-focus-within:text-[#165ef0]">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-3 py-2 border-2 border-neutral-300 rounded-md focus:outline-none focus:border-[#165ef0] leading-none text-md"
      />
    </div>
  );
};

export default Input;
