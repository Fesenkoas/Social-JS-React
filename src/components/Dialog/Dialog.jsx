import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MassegeItem from "./Message/Message";

const Dialog = (props) => {

  const onSendMessageClick = () => {
    props.addMessageAction();
  };
  const onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateMessageAction(body);
  }
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {props.dialogData.map((d) => (
            <DialogItem name={d.name} id={d.id} />
          ))}
        </div>
        <div className={s.massages}>
          <div>
            {props.messageData.map((m) => (
              <MassegeItem massage={m.massage} />
            ))}
          </div>
          <div>
            <textarea onChange={onNewMessageChange} value ={props.newMessageText} placeholder="Enter our Message"></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Add Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialog;
