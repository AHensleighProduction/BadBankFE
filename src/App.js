import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CreateAccount from "./components/account";
import NavBar from "./components/navbar";
import Withdraw from "./components/withdraw";
import Deposit from "./components/deposit";
import AllData from "./components/alldata";
import { UserContext } from "./components/context";
import React from "react";

function App() {
 const [currentUser, setCurrentUser] = React.useState(null);
 const [users, setUsers] = React.useState([]);
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          currentUser: currentUser,
          users:users,
          setCurrentUser: setCurrentUser,
          addUser: (user) => {
            setUsers((prevUsers)=>[...prevUsers , user]);
          },
          setUsers: setUsers,
        }}
      >
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/all-data" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
