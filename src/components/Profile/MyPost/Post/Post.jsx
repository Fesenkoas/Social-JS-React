import c from "./Post.module.css";

const Post = ({message, like}) =>{
  return(
      <div className={c.item}>
        <img src="https://openclipart.org/image/800px/177394" alt="img"/>
        {message}
        <div>
        <span>{like}</span>
        </div>
        </div>
  );
}
export default Post;