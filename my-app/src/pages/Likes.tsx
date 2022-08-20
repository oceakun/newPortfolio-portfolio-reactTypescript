import React from 'react';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import styled from "styled-components"; 

export interface ILikesPageProps {}

const Likes: React.FunctionComponent<ILikesPageProps> = (props) => {
  return (
    <GithubProjectsContainer>
      Find my Github projects here
      </GithubProjectsContainer>
    );
};

export default Likes;

const GithubProjectsContainer = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:center;
color:white;
gap:20px;
margin-top:10px;
`;