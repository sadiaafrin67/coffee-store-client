import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)


    const handleDelete  = id => {
      fetch(`https://coffee-store-server-e1rj7c2nv-sadiaafrin67.vercel.app/user/${id}`, {
        method: 'DELETE',
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.deletedCount > 0){
            console.log('deleted successfully')
            const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers)
        }
      })
    }
    return (
        <div>
            <h2>users: {loadedUser.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
                <button onClick={() => handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;