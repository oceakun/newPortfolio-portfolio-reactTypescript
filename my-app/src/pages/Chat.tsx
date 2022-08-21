import React,{useState , useEffect} from 'react';
import { useParams } from "react-router-dom";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import styled from "styled-components";
export interface IChatPageProps { }

const Chat: React.FunctionComponent<IChatPageProps> = (props) => {
  const [message, setMessage] = useState('');
  const { number } = useParams();
  useEffect(() => { 
    if(number)
    {
      setMessage("The number is " + number);
    }
    else
    {
      setMessage("No number was provided");
    }
  },[]);
  return (
    <ChatContainer>
      Contact me / Use the chatbot to know things about me
    </ChatContainer>
    );
};

export default Chat;

const ChatContainer = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:center;
color:white;
gap:20px;
margin-top:10px;
`;