import React, {Component} from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NoMatchPage from "./NoMatchPage";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

export default class App extends 
Component
{
    render()
    {
        return (
            <Router>
            <div className="App">
                <NavBar />
                <div className="content"> 
                  <Routes>
                      <Route exact path="/" element={<Login />}/>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/customers" element={<CustomersList />} />
                      <Route path="/cart" element={<ShoppingCart />} />
                      <Route path="*" element={<NoMatchPage />} />
                  </Routes>
                  
                </div>
              
            </div>
            </Router>
            );
    }
}

