import React, { useContext } from "react";
import { UserContext } from "../App";

function Blog1() {
  const [user] = useContext(UserContext);
  return (
    <section>
      <p>Welcome {user ? user.name : "..."}</p>
      <h1>What is Array in react</h1>
    </section>
  );
}

export default Blog1;
