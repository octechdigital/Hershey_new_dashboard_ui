import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useUserInfo = () => {
  const user = useSelector((state: RootState) => state.user);

  return {
    ...user,
    isAdmin: user.role === "Admin",
  };
};

export default useUserInfo;
