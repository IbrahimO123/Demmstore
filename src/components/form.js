import React, { useReducer } from "react";
function Form() {
  const details = {
    name: "",
    username: "",
    phonenumber: "",
    password: "",
    isRemote: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "input":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "remote":
        return { ...state, isRemote: !state.isRemote };
      default:
        return state;
    }
  };
  const handleChange = (e) => {
    setInputs({
      type: "input",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    alert(
      JSON.stringify({
        name,
        username,
        password,
        phonenumber,
        isRemote,
      })
    );
  };
  const handleRemote = (e) => {
    setInputs({
      type: "remote",
    });
  };

  const [inputs, setInputs] = useReducer(reducer, details);
  const { name, username, phonenumber, password, isRemote } = inputs;
  return (
    <>
      <form>
        <p>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="name"
            placeholder="Name"
            value={name}
            required
          ></input>
        </p>
        <p>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="username"
            placeholder="Username"
            value={username}
            required
          ></input>
        </p>
        <p>
          <input
            type="number"
            onChange={(e) => handleChange(e)}
            name="phonenumber"
            placeholder="Phonenumber"
            value={phonenumber}
            required
          ></input>
        </p>
        <p>
          <input
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
            placeholder="Password"
            value={password}
            required
          ></input>
        </p>
        <p>
          <input
            type="checkbox"
            onClick={(e) => handleRemote(e)}
            value={isRemote}
            name="remote"
          ></input>
          <span>Remote Work</span>
        </p>
        <p>
          <button type="submit" onClick={(e) => handleClick(e)} name="save">
            Save
          </button>
        </p>
      </form>
      <p>{name}</p>
      <p>{username}</p>
      <p>{phonenumber}</p>
      <p>{password}</p>
      <div>{isRemote ? <p>Remote</p> : <p>Office </p>}</div>
    </>
  );
}

export default Form;
