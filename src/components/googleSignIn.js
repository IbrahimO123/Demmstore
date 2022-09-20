import React, { useEffect, useState } from "react";
import {
  provider,
  auth,
  signInWithRedirect,
  onAuthStateChanged,
  signOut
} from "../firebase/index";

function GoogleSignIn() {
  const [googleUser, setGoogleUser] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setGoogleUser((prevData) => user);
        setLoaded(true);
      } else {
        // User is signed out
        // ...

      }
    });
  }, [googleUser]);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      setLoaded(false);
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <div>
      {isLoaded ? (
        <div>
          <p>Name: {googleUser.displayName}</p>
          <p>Email: {googleUser.email}</p>
          <img src={googleUser.photoURL} alt={googleUser.displayName} ></img>
          <p><button type="submit" onClick={(e) => handleSignOut(e)} >Sign Out</button></p>
        </div>
      ) : (
        <div>
          <p>Sign In With Google...click below button &#8595;</p>
          <button type="submit" onClick={(e) => handleSignIn(e)}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default GoogleSignIn;
