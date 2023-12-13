import { Link } from 'react-router-dom';
import "./navbar.css"
import logo from "../images/homebg.png"
import React from 'react';
import { UserContext } from './context';

export default function NavBar(){
  const ctx = React.useContext(UserContext);
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        <img src = {`${process.env.PUBLIC_URL}/bank.png`} style = {{height:"40px"}}/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/create-account"title='Create your account.'>Create Account</Link>
            </li>
         
          {!!ctx.users.length&&<><li className="nav-item">
            <Link className="nav-link" to="/deposit/" title='Make a deposit.'>Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/withdraw/" title='Make a withdrawal.'>Withdraw</Link>
          </li></>}
            
            <li className="nav-item">
              <Link className="nav-link" to="/all-data/" title='View all data.'>AllData</Link>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }