import React from 'react';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import styled from "styled-components";
export interface IProfilePageProps {}

const Profile: React.FunctionComponent<IProfilePageProps> = (props) => {
  return (
    <ProfileContainer>
      A little something about myself
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