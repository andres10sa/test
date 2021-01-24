import React, { useContext } from "react";
import CardUser from "./CardUser";
import { FetchContext } from "../../context/FetchContext";

const Users = () => {

  const { users } = useContext(FetchContext);

  return (
    <div className="cards-container">
      {users?.map((user, index) => (
        <CardUser
          key={`${user.name.first}${index}`}
          photo={user.picture.large}
          name={`${user.name.first} ${user.name.last}`}
          phone={user.phone}
        />
      ))}
    </div>
  );
};

export default Users;

