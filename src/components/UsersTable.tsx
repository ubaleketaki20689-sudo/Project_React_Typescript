import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import type { User } from "../types/user";

const UsersTable = () => {

  const { users } = useContext(UserContext);

  const [sortField, setSortField] = useState<keyof User>("name");
  const [asc, setAsc] = useState(true);

  const sortData = (field: keyof User) => {
    setSortField(field);
    setAsc(prev => !prev);
  };

  const sortedUsers = [...users].sort((a, b) => {

    const valueA = String(a[sortField]);
    const valueB = String(b[sortField]);

    if (asc) return valueA.localeCompare(valueB);
    return valueB.localeCompare(valueA);

  });

  return (

    <table border={1} cellPadding={10}>

      <thead>
        <tr>
          <th onClick={() => sortData("name")}>Name</th>
          <th onClick={() => sortData("email")}>Email</th>
          <th onClick={() => sortData("city")}>City</th>
          <th onClick={() => sortData("company")}>Company</th>
        </tr>
      </thead>

      <tbody>
        {sortedUsers.map((user: User) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.company}</td>
          </tr>
        ))}
      </tbody>

    </table>

  );
};

export default UsersTable;