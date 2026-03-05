import { createContext, useEffect, useState } from "react";
import type { User } from "../types/user";

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: any) => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((u: any) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          city: u.address.city,
          company: u.company.name
        }));

        setUsers(formatted);
      });
  }, []);

  const addUser = (newUser: User) => {
    setUsers((prev: User[]) => [...prev, newUser]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};