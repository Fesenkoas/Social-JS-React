import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MassegeItem from "./Message/Message";
import {updateMessageAction, addMessageAction} from "../../script/dialog_reduser"
const Dialog = (props) => {

  const state = props.store.getState().dialogPage;
  const newMessageText = state.newMessageText;
  const onSendMessageClick = () => {
    props.store.dispatch(addMessageAction());
  };
  const onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateMessageAction(body));
  }
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {state.dialogData.map((d) => (
            <DialogItem name={d.name} id={d.id} />
          ))}
        </div>
        <div className={s.massages}>
          <div>
            {state.messageData.map((m) => (
              <MassegeItem massage={m.massage} />
            ))}
          </div>
          <div>
            <textarea onChange={onNewMessageChange} value ={newMessageText} placeholder="Enter our Message"></textarea>
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
