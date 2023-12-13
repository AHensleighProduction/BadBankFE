import React from "react";
import Card, { UserContext } from "./context";

function Withdraw({ setCurrentUser }) {
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [amount, setAmount] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function clearForm() {
    setShow(true);
    setAmount(0);
  }

  async function handleWithdraw() {
    // check if the balance is greater than withdraw amount
    if (ctx.currentUser.balance >= Number(amount)) {
      const updatedUsers = ctx.users.map((user) => {
        if (user.email === ctx.currentUser.email) {
          user.balance -= Number(amount);
          // ctx.currentUser = user;
          ctx.setCurrentUser(user);
          return user;
        } else {
          return user;
        }
      });
      ctx.setUsers  (updatedUsers);
      setShow(false);
    } else {
      setStatus("Insufficient Funds");
      setAmount("");
      setTimeout(() => setStatus(""), 3000);
    }

    //if it is then proceed
    //otherwise show error message
    // find total balance
    // subtract withdraw amount
  }
  return (
    <Card
      bgcolor="white"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            {ctx.currentUser && (
              <h3>Current Balance: {ctx.currentUser.balance} </h3>
            )}
            Amount
            <br />
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button className="btn btn-light" onClick={handleWithdraw}>
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button className="btn btn-light" onClick={clearForm}>
              New Withdraw{" "}
            </button>
          </>
        )
      }
    />
  );
}
export default Withdraw;
