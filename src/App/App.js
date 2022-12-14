import React from 'react';
import './App.css';
import TodoList from '../TodoList';
import { Navbar, NavbarBrand } from "reactstrap";

const headerTitle = "Todo List";

const headerDisplay = (title) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{title}</NavbarBrand>
  </Navbar>
);

const App = () => (
  <div className="App">
  {headerDisplay(headerTitle)}
  <br />
  <TodoList />
  </div>
);

export default App;
