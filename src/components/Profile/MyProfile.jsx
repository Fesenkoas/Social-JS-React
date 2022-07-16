import MyPostContainer from "./MyPost/MyPostContainer";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo"

const Profile = ({profile}) =>{
  return(
    <div>
      <MyProfileInfo/>
      <MyPostContainer />
    </div>
  );

}
export default Profile;