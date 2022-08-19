import React from 'react'
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@mui/material/IconButton';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';

function Navbar() {
    return (
        <NavbarContainer>
            {/* <NavbarGroupI> */}
                <NavbarLogo>
                    <p>amity_social</p>
            </NavbarLogo>
            <hr></hr>
                <NavbarSearchbar>
                    <input type="text" placeholder="..."/>
            </NavbarSearchbar>
            <hr></hr>
            {/* </NavbarGroupI> */}
                <NavbarLinks>
                    <IconButton onClick={()=>console.log("Home/Blogs button clicked")} style={{color:"#d19280"}}>
                    <HomeRoundedIcon />
                    </IconButton>
                    <IconButton onClick={()=>console.log("Chat button clicked")} style={{color:"#d19280"}}>
                    <SendRoundedIcon />
                    </IconButton>
                    <IconButton onClick={()=>console.log("Compass button clicked")} style={{color:"#d19280"}}>
                    <ExploreRoundedIcon />
                    </IconButton>
                    <IconButton onClick={()=>console.log("Likes button clicked")} style={{color:"#d19280"}}>
                    <StarBorderPurple500RoundedIcon />
                    </IconButton>
                    <IconButton onClick={()=>console.log("Profile button clicked")} style={{color:"#d19280"}}>
                    <FaceRoundedIcon />
                    </IconButton>
            </NavbarLinks>
            <hr></hr>
        </NavbarContainer>
  )
}

export default Navbar;

const NavbarGroupI = styled.div`
display:flex;
flex-flow:row;
justify-content:space-around;
align-items:center;
gap:10vw;
`;

const NavbarGroupII = styled.div`

`;

const NavbarLogo = styled.div`
>p{
    color:#d19280;
    font-family:OCR A Std, monospace;
}
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
    // border:solid 1px #d19280;
    // border-radius:2px; 
    outline:none;
    color:#d0dbf2;
 }
`;

const NavbarLinks = styled.div`
display:flex;
flex-flow:row;
justify-content:space-around;
align-items:center;
gap:1vw;
`;

const NavbarContainer = styled.div`
display:flex;
flex-flow:row;
justify-content:center;
align-items:center;
background-color:white;
gap : 10vw;
box-shadow: 0 1px 7px #002171;
>hr{
    // color:transparent;
    display:none;
}
@media only screen and (max-width: 700px) {
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    gap:1vh;
    >hr{
        color:#d19280;
        width:50vw;
    }
  }
`;