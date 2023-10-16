import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList, getUsers } from "../../../redux/usersSlice";

const Users = () => {
  const { users, loading, error } = useSelector(getUserList);

  //   console.log("loading--", loading);
  console.log("error", error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-5">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center custom-90vh">
            <h1>Loading....</h1>
          </div>
        ) : error != null ? (
          <h1>{"error"}</h1>
        ) : (
          <div className="card-wrapper">
            {users &&
              users?.length > 0 &&
              users?.map((user, index) => {
                return (
                  <>
                    {" "}
                    <div
                      className="card  bg-dark m-5"
                      style={{ width: "18rem" }}
                    >
                      <div className="card-body">
                        <h6 className="card-title">{user.name}</h6>
                        <h6 className="card-title">{user.email}</h6>
                        <input type="text" placeholder="Edit you name" />
                        <div className="d-flex my-3 gap-2">
                          <button className="btn btn-outline-primary">
                            Save
                          </button>
                          <button className="btn btn-outline-danger">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
