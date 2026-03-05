import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
      city,
      company
    };

    addUser(newUser);

    setName("");
    setEmail("");
    setCity("");
    setCompany("");

    navigate("/");
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={submitHandler}>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <button type="submit">Add User</button>

      </form>
    </div>
  );
};

export default AddUser;