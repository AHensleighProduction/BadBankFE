import React from "react";
import Card, { UserContext } from "./context";

function Deposit({setCurrentUser}){ 
    const [status, setStatus]     = React.useState('');
    const [show, setShow]         = React.useState(true);
    const [amount, setAmount]         = React.useState(0);
    const ctx = React.useContext(UserContext);  

    
    function clearForm(){
    
      setShow(true);
      setAmount(0)
    }
  function handleDeposit(){
   if(!Number(amount)){
        setStatus("Error: amount is not a number")
        setTimeout(() => setStatus(''),3000);
        return;
   }
   if(Number(amount) < 0){
        setStatus("Error: amount is negative")
        setTimeout(() => setStatus(''),3000);
        return; 
   }
  //update the user's bal in ctx.users
    //loop through the array of users
   const updatedUsers = ctx.users.map(user => {
     //if the user is the current user
     if(user.email === ctx.currentUser.email){
       //update the balance
       user.balance += Number(amount)
       //set the current user to the updated user
      //  ctx.currentUser = user
      ctx.setCurrentUser(user)
       //return the user
       return user
     } else {
       //return the user
       return user
     }
   } )
    
   ctx.setUsers(updatedUsers)
  setShow(false);
  }
  
    return (
      <Card
      bgcolor="blue"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
            { ctx.currentUser && <h3>Current Balance: {ctx.currentUser.balance} </h3>}
             
              Amount<br/>
              <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
              <button  className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button  className="btn btn-light" onClick={clearForm}>New Deposit</button>
              </>
            )}
    />
    )
  }
  export default Deposit