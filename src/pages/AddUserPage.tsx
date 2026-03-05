import AddUser from "../components/AddUser";
import { Link } from "react-router-dom";


const AddUserPage = () => {
return(
    <div>
        <h1>Add User</h1>
        <Link to='/'>Back to Users</Link>
        <AddUser />
    </div>
)
}
export default AddUserPage;