import MyPost from "./MyPost/MyPost";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = () =>{
  return(
    <div>
      <ProfileInfo/>
      <MyPost/>
    </div>
  );

}
export default Profile;