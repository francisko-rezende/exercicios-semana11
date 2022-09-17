import React from "react";
import PropTypes from "prop-types";
import { useUsers } from "../hooks";
import { Card } from "../components/Card/Card";

const Profiles = (props) => {
  const { users } = useUsers();
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

Profiles.propTypes = {};

export default Profiles;
