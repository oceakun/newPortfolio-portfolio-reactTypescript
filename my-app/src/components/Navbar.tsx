import React from 'react'
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@mui/material/IconButton';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import { useNavigate } from "react-router-dom"; 

function Navbar() {

    const navigate = useNavigate();
    return (
        <NavbarContainer>
            {/* <NavbarGroupI> */}
                <NavbarLogo>
                    <p>Sagar_Deep</p>
            </NavbarLogo>
            {/* </NavbarGroupI> */}
                <NavbarLinks>
                <IconButton onClick={() =>navigate("/home")} style={{color:"rgb(245, 113, 135)"}}>
                    <HomeRoundedIcon />
                    </IconButton>
                    <IconButton onClick={()=>navigate("/chat")} style={{color:"rgb(245, 113, 135)"}}>
                    <SendRoundedIcon />
                    </IconButton>
                    {/* <IconButton onClick={()=>console.log("Compass button clicked")} style={{color:"rgb(245, 113, 135)"}}>
                    <ExploreRoundedIcon />
                    </IconButton> */}
                    <IconButton onClick={()=>navigate("/likes")} style={{color:"rgb(245, 113, 135)"}}>
                    <StarBorderPurple500RoundedIcon />
                    </IconButton>
                    <IconButton onClick={()=>navigate("/profile")} style={{color:"rgb(245, 113, 135)"}}>
                    <EmojiEmotionsRoundedIcon />
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
    color:rgb(245, 113, 135);
    font-family:OCR A Std, monospace;
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
box-shadow: 0 1px 20px white;
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
        color:rgb(245, 113, 135);
        width:50vw;
    }
  }
`;