import React from "react";
import classes from "../components/Auth.module.css";
import { useDispatch } from "react-redux";
import { AuthSliceAction } from "../Store/AuthSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const loginSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(AuthSliceAction.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
