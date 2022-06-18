import c from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {

  

  return (
    <div className={c.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add Post</button>
      </div>
      <div className={c.posts}>
        {props.posts.map(p => <Post message={p.massage}like={p.likesCount}/>)}
      </div>
    </div>
  );
};
export default MyPost;
