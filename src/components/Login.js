import React, { useState, useEffect } from "react";
import fb from "../firebase.config";

const Login = (props) => {
  let { user, setUser } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("user", user);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    fb.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
        }
      });
  };

  const authListener = () => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        user.getIdToken().then(function (idToken) {
          localStorage.setItem("idToken", idToken);
        });
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          value={email}
          autoFocus
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <span>
              <button onClick={handleLogin} type="submit">
                Sign In
              </button>
              <p>
                Don't have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </span>
          ) : (
            <>
              <button onClick={handleSignup} type="submit">
                Sign Up
              </button>
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
