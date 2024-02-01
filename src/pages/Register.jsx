import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Register = () => {
  const { login, register } = useKindeAuth();
  return (
    <div className="flex gap-3 whitespace-nowrap">
      <button
        className="bg-black hover:bg-black/70 rounded-full text-white font-bold py-2 px-4 shadow-md"
        onClick={register}
        type="button"
      >
        Register
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-500/70 rounded-full text-white font-bold py-2 px-4 shadow-md"
        onClick={login}
      >
        Sign in
      </button>
    </div>
  );
};

export default Register;
