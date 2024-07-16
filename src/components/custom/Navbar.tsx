import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="px-4 py-2 flex justify-between shadow-md overflow-hidden">
      <img
        src="/logo.svg"
        alt="AI Resume Builder"
        height={55}
        width={55}
        className="cursor-pointer"
      />
      {isSignedIn ? (
        <div className="flex justify-around itmes-center">
          <Button className="font-bold h-10 text-md mt-2">Dashboard</Button>
          <UserButton />
        </div>
      ) : (
        <Link to="/sign-in">
          <Button className="font-bold h-10 text-md">Start Your Career</Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
