import React, { useContext } from "react";
import { UserContext } from "../App";

function Blog2() { 
    const [user] = useContext(UserContext)
    return (<section>
        <p>Welcome {user ? user.name : "..."}</p>
        <h2>What do you understand by Library in programming</h2>
    </section>)
}

export default Blog2;