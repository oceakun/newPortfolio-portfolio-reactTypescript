import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styled from "styled-components";

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <HomeContainer>
      <NavbarSearchbar>
              <input type="text" placeholder="..."/>
      </NavbarSearchbar>
      Find my blogs here
      </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:center;
color:white;
gap:20px;
margin-top:10px;
`;

const NavbarSearchbar = styled.div`
>input{
    border:solid 1px #0e3796;
    border-radius:2px;
    background-color:transparent;
    height : 20px;
    width:200px;
}
>input[type="text"]::placeholder {
    color: #d0dbf2;
    opacity: 1;
    text-align: center;
    font-size: 13px;
    font-weight: 100;
  }
  
>input:focus {
    // border:solid 1px red;
    // border-radius:2px; 
    outline:none;
    color:#d0dbf2;
 }
`;
