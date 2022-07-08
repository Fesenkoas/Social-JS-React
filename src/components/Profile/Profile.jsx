import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) =>{
  return(
    <div>
      <ProfileInfo/>
      <MyPostContainer />
    </div>
  );

}
export default Profile;