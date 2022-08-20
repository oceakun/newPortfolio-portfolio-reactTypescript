import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import HeaderPage from "./pages/Header";
import HomePage from "./pages/Home";
import ChatPage from "./pages/Chat";
import LikesPage from "./pages/Likes";
import ProfilePage from "./pages/Profile";
interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeaderPage/>}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="chat" element={<ChatPage/>}/>
                    {/* <Route path="chat">
                        <Route index element={<ChatPage />}/>
                        <Route path=":number" element={<ChatPage />}/>
                    </Route> */}
                    <Route path="likes" element={<LikesPage/>}/>
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//     </div>
//   );
// }

export default App;
