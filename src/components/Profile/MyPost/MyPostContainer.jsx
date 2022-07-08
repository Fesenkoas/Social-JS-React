
import MyPost from "./MyPost";
import {
  updatePostAction,
  addPostAction,
} from "../../../script/profile_reduser";
import  {connect} from "react-redux";

const mapStateToProps = (state) =>{
  return{
    posts:state.profilePage.postData,
    newPostText:state.profilePage.newPostText
  }
  }
  const mapDispatchToProps = (dispatch) =>{
    return{
      updatePostAction: (body) => dispatch(updatePostAction(body)),
      addPost: () => dispatch(addPostAction())
    }
  }
  const MyPostContainer = connect(mapStateToProps,mapDispatchToProps) (MyPost);

export default MyPostContainer;
