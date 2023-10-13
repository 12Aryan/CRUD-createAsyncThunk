import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, getUsers } from "../redux/usersSlice";


const Users = () => {
  const { users, loading, error } = useSelector(getUserList);

  //   console.log("loading--", loading);
  console.log('error', error)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : error != null ? (
        <h1>{"error"}</h1>
      ) : (
        <div>
          {users &&
            users?.length > 0 &&
            users?.map((user, index) => {
              return <div key={index}>{user.name}</div>;
            })}
        </div>
      )}
    </>
  );
};

export default Users;
