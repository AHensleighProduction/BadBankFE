import React from 'react';
import { UserContext } from './context';






export default function AllData(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
        <h5 style = {{color:"white"}}>All Data in Store</h5>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {ctx.users.map((user)=>{
              return(
                <tr key = {user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.balance}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      );
  }
  