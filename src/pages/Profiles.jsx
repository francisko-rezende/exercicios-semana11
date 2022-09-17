import { useUsers } from "../hooks";
import { Card } from "../components/Card/Card";

const Profiles = () => {
  const { users, toggleFollow } = useUsers();
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} toggleFollow={toggleFollow} {...user} />
      ))}
    </div>
  );
};

export default Profiles;
