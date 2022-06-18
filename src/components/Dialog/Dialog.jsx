import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MassegeItem from "./Message/Message";

const Dialog = (props) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {props.state.dialogData.map(d => <DialogItem  name={d.name} id={d.id}/>)}
      </div>
      <div className={s.massages}>
        {props.state.messageData.map( m => <MassegeItem  massage={m.massage}/>)}
      </div>
    </div>
  );
};
export default Dialog;
