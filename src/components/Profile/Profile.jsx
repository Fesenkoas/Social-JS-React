import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = ({profile}) =>{
  return(
    <div>
      <ProfileInfo profile={profile}/>
      <MyPostContainer />
    </div>
  );

}
export default Profile;