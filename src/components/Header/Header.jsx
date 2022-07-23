import { NavLink } from "react-router-dom";
import h from "./Header.module.css";

let Header = ({isAuth,login}) =>{
  return (
  <header className={h.header}>
    In Israel
    <div className={h.loginBlock}>{
      isAuth? <NavLink to={'/login'}>{login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>
    }
    </div>
  </header>
  );

}
export default Header;