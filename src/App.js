
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogContainer from "./components/Dialog/DialogContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* material UI */
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
          <Route path="/profile" element={<Profile/>} />

          <Route  path="/dialog" element={<DialogContainer/>} />

          <Route path="/news" element={<News/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/setting" element={<Setting/>} />
          </Routes>
          {/* <Profile/> */}
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
