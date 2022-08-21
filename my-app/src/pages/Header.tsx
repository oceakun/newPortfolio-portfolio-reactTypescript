import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";

export interface IHeaderPageProps {}

const Header: React.FunctionComponent<IHeaderPageProps> = (props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      </div>
    )
}

export default Header;