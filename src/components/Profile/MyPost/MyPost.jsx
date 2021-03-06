import c from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {

  let postData=[
    {id:1, massage: "hi",likesCount: 15},
    {id:2, massage: "how are you?", likesCount: 5}
  ];

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
        {postData.map(p => <Post message={p.massage}like={p.likesCount}/>)}
      </div>
    </div>
  );
};
export default MyPost;
