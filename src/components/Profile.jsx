import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-yellow-500 text-6xl font-bold font-sans absolute top-[240px] left-[125px]">Please Login</div>;
  return (
    <div className="text-yellow-500 text-6xl font-bold font-sans absolute top-[240px] left-[125px]">
      Welcome {user.username}.
    </div>
  );
};

export default Profile;
