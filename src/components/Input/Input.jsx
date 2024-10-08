const Input = (props) => {
  return (
    <Input
      className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400"
      {...props}
    />
  );
};

export default Input;
