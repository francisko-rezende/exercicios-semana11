import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { users as userData } from "../assets/data/users";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || userData,
  );

  const toggleFollow = (userId) => {
    const profile = users.find(({ id }) => id === userId);
    const isFollowing = profile.seguindo;

    const updatedProfile = { ...profile, seguindo: !isFollowing };

    setUsers((previousUsers) => {
      const filteredUsers = previousUsers.filter(({ id }) => id !== userId);
      return [...filteredUsers, updatedProfile];
    });
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  return (
    <UsersContext.Provider value={{ users, toggleFollow }}>
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node,
};
