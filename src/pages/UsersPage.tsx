
import UsersTable from "../components/UsersTable";
import { Link } from "react-router-dom";
const UsersPage = () => {
    return (
        <div>
            <h1>Users</h1>
            <Link to='/add'>Add User</Link>
            <UsersTable />
        </div>
    );

}
export default UsersPage;