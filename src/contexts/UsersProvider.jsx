import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState();

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
    localStorage.setItem("users", users);
  }, [users]);

  useEffect(() => {
    setUsers(localStorage.getItem("users"));
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
