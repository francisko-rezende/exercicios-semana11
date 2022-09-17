import { useContext } from "react";
import { UsersContext } from "../contexts/UsersProvider";

export const useUsers = () => {
  const { users, toggleFolow } = useContext(UsersContext);
  return { users, toggleFolow };
};
