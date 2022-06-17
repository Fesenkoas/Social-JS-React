import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
  return <div className={s.item + " " + s.active}>
  <NavLink to={"/dialog/"+ props.id}>{props.name}</NavLink>
  </div>
}

const MassegeItem = (props) =>{
  return <div className={s.massage}>{props.massage}</div>
}
const Dialog = () => {
  const dialogData =[
    {id:1, name: 'dimich'},
    {id:2, name: 'sveta'},
    {id:3, name: 'valera'},
    {id:4, name: 'nasty'},
    {id:5, name: 'sasha'}
]
const messageData=[
  {id:1, massage: 'Hi'},
  {id:2, massage: "how are you?"},
  {id:3, massage: "im fine"},
  {id:4, massage: 'Hi'},
  {id:5, massage: 'Hi'}
];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogData.map(d => <DialogItem  name={d.name} id={d.id}/>)}
      </div>
      <div className={s.massages}>
        {messageData.map( m => <MassegeItem  massage={m.massage}/>)}
      </div>
    </div>
  );
};
export default Dialog;
