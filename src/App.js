
import "./App.css";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogContainer from "./components/Dialog/DialogContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContainer from "./components/User/UserContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

/* material UI */
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
          <Route path="/profile/:userId" element={<ProfileContainer/>} />
          <Route path="/profile" element={<ProfileContainer/>} />
          <Route  path="/dialog" element={<DialogContainer/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/User" element={<UserContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
