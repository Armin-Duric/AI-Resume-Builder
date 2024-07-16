import { Outlet, Navigate } from "react-router-dom";
import "./App.css";
import { useUser } from "@clerk/clerk-react";
// import Navbar from "./components/custom/Navbar";

const App = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to="/sign-in" />;
  } else {
    return (
      <>
        {/* <Navbar /> */}
        <Outlet />
      </>
    );
  }
};

export default App;
