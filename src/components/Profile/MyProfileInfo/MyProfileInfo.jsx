import c from "./MyProfileInfo.module.css";

import Preloader from "../../common/Preloader/Preloader";

const MyProfileInfo = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  } else{
    return (
      <div>
        <div>
          <img
            src="https://media.istockphoto.com/photos/the-picturesque-mountain-landscape-on-the-sunset-background-picture-id1327276218?b=1&k=20&m=1327276218&s=170667a&w=0&h=j_6Bu9P8PvHu8wQvtAyxUpfBeO189peY4F1C086_7lU="
            alt="#"
          />
        </div>
        <div className={c.descriptionBlock}>
          <div>
            <h1>{profile.fullName}</h1>
          </div>
          <div className={c.item}>
            <img src={profile.photos.large} alt="#" />
          </div>
          <div>
            {profile.aboutMe}
          </div>
          <div>
            <div>
              <a href={profile.contacts.facebook}>Facebook</a>
            </div>
            <div>
              <a href={profile.contacts.website}>WebSite</a>
            </div>
            <div>
              <a href={profile.contacts.vk}>VK</a>
            </div>
            <div>
              <a href={profile.contacts.twitter}>Twitter</a>
            </div>
            <div>
              <a href={profile.contacts.instagram}>Instagram</a>
            </div>
            <div>
              <a href={profile.contacts.youtube}>YouTube</a>
            </div>
            <div>
              <a href={profile.contacts.github}>GitHub</a>
            </div>
            <div>
              <a href={profile.contacts.mainLink}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default MyProfileInfo;
