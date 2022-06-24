import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MassegeItem from "./Message/Message";

const Dialog = (props) => {
  const getPost = React.createRef();
  const addPost = () => {
    alert (getPost.current.value)

  } 
  return (
    <div>
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {props.state.dialogData.map(d => <DialogItem  name={d.name} id={d.id}/>)}
      </div>
      <div className={s.massages}>
        {props.state.messageData.map( m => <MassegeItem  massage={m.massage}/>)}
      </div>
    </div>
    <div>
    <textarea ref = {getPost}></textarea>
    </div>
    <div>
    <button onClick={addPost}>Add Post</button>
    </div>
    </div>
  );
};
export default Dialog;
