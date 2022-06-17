import c from "./ProfileInfo.module.css";

const ProfileInfo = () =>{
  return(
    <div>
    <div className={c.item}>
    <img src="https://media.istockphoto.com/photos/the-picturesque-mountain-landscape-on-the-sunset-background-picture-id1327276218?b=1&k=20&m=1327276218&s=170667a&w=0&h=j_6Bu9P8PvHu8wQvtAyxUpfBeO189peY4F1C086_7lU=" alt="#"/>
    </div>
    <div className={c.descriptionBlock}>
      ava+discr
    </div>
    </div>
  );
}
export default ProfileInfo;