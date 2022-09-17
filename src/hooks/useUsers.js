import { useContext } from "react";
import { UsersContext } from "../contexts/UsersProvider";

export const useUsers = () => {
  const { users, toggleFollow } = useContext(UsersContext);
  return { users, toggleFollow };
};
