import { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function UserButton() {
  const { user, logout } = useKindeAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown}>
        <img
          src={user.picture}
          alt="user profile avatar"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => console.log("Account details")}
              className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Account details
            </button>
            <button
              className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
