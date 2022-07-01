import React from "react";
import c from "./MyPost.module.css";
import Post from "./Post/Post";
import {updatePostAction, addPostAction} from "../../../script/profile_reduser"




const MyPost = (props) => {
  const getPost = React.createRef();

  const postElements = props.posts.map(p => 
    <Post message={p.massage} like={p.likesCount} />);

  const addPost = () => {props.dispatch(addPostAction())};
  const onPostChange = () => {props.dispatch(updatePostAction(getPost.current.value))};

  return (
    <div className={c.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={getPost}
            value={props.newPostText}
            placeholder="Enter our Message"
          />
        </div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={c.posts}>
        {postElements}
      </div>
    </div>
  );
};
export default MyPost;
