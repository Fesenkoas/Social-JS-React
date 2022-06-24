import React from "react";
import c from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
const getPost = React.createRef();
  const addPost = () => {
    props.setPost(getPost.current.value);
    getPost.current.value='';
  } 
  

  return (
    <div className={c.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref = {getPost}></textarea>
        </div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={c.posts}>
        {props.posts.map(p => <Post message={p.massage}like={p.likesCount}/>)}
      </div>
    </div>
  );
};
export default MyPost;
