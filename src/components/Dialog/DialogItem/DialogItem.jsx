import s from "./../Dialog.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
  return <div className={s.item + " " + s.active}>
  <NavLink to={"/dialog/"+ props.id}>{props.name}</NavLink>
  </div>
}


export default DialogItem;
