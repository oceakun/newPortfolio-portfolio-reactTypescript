import React from 'react';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import styled from "styled-components";
export interface IProfilePageProps {}

const Profile: React.FunctionComponent<IProfilePageProps> = (props) => {
  return (
    <ProfileContainer>
      {/* A little something about myself */}
      {/* ----------------------intro---------------------- */}
      <div className="intro border-gradient outermost-border-gradient ">
      <div className="header">
      {/* --------------------- */}
      <div className="header__content">
        <div className="hello">
          <div className="header_hi">
            <h2 className="border-gradient-blue">Hello</h2>
          </div>
          {/* --------------------- */}
          <div className="header_intro">
            <p className="border-gradient-yellow">
              I'm <mark>Sagar</mark>
            </p>
          </div>
        </div>
        {/* --------------------- */}
        <div className="header_work">
          <p className="border-gradient-deepYellow header_work_1">
            <mark>React</mark> Developer
          </p>
          {/* --------------------- */}
          <p className="border-gradient-pink header_work_2">
            <mark>ML</mark> Beginner
          </p>
          {/* --------------------- */}
          <p className="border-gradient-purple header_work_3">
            <mark>Cloud</mark> enthusiast
          </p>
        </div>
      </div>
        </div>
        <a
          className="button border-gradient button-border-gradient"
          href="mailto:sagardeep1811@hotmail.com?subject=Reaching%20out%20to%20you%20via%20your%20portfolio."
        >
          Get In Touch
        </a>
    </div>
    </ProfileContainer>
    );
};

export default Profile;
const ProfileContainer = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:center;
color:white;
gap:20px;
margin-top:10px;
`;