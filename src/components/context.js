import React, { useContext } from 'react';
import { UserContext} from "../App"

function Context () {
    const [user] = useContext(UserContext)

    return <div>
        <h2>I Am Using The Context Api</h2>
        <p>{user ? `My name is ${user.name}`: <a href='/'>Sign In</a>}</p>
        <p>{user ? `My email address is ${user.email}`: ""}</p>
        <p>{ user ? ` I am ${user.age} years old` : ""} </p>
        <p>{user ? `And am currently in ${user.location}` : ""}</p>
    </div>
}

export default Context;