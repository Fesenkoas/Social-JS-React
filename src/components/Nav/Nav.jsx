 import s from "./Nav.module.css"
 import {Link} from "react-router-dom";

const Nav = () =>{
  return( 
  <nav className={s.nav}>
        <div className={s.item}>
          <Link to ="/profile">Profile</Link>
        </div>
        <div className={`${s.item}`}>
          <Link to="/dialog" >Messanger</Link>
        </div>
        <div className={s.item}>
          <Link to="/News" >News</Link>
        </div>
        <div className={s.item}>
          <Link to="/Music">Music</Link>
        </div>
        <div className={s.item}>
          <Link to="/Setting">Settings</Link>
        </div>
      <div className={s.item}>
          <Link to="/User">User</Link>
      </div>
      </nav>
      
  );

}
export default Nav;
