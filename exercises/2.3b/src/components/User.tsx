import { Users } from "../types";



const UsersList = (props: Users) => {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Age</th>
        </tr>

        {props.users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UsersList;
