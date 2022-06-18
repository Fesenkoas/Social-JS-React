import MyPost from "./MyPost/MyPost";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) =>{
  return(
    <div>
      <ProfileInfo/>
      <MyPost posts = {props.state.postData}/>
    </div>
  );

}
export default Profile;