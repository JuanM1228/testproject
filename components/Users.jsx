import React, { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    alert("new");
  }, []);

  return <div>Users</div>;
};

export default Users;
