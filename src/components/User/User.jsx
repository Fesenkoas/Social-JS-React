import s from "./user.module.css";
const User = (props) => {
    if(props.users.length === 0){
  props.setUsers([
    {
      id: 1,
      photoUrl: "https://openclipart.org/image/800px/177394",
      fullName: "hi",
      followed: false,
      status: "Im a boss",
      location: { city: "Minsk", contry: "israel" },
    },
    {
      id: 2,
      photoUrl: "https://openclipart.org/image/800px/177394",
      fullName: "a",
      followed: false,
      status: "Itrhrth",
      location: { city: "g", contry: "fghg" },
    },
    {
      id: 3,
      photoUrl: "https://openclipart.org/image/800px/177394",
      fullName: "b",
      followed: true,
      status: "124",
      location: { city: "erge", contry: "dfgdgdg" },
    },
    {
      id: 4,
      photoUrl: "https://openclipart.org/image/800px/177394",
      fullName: "c",
      followed: true,
      status: "k,,iiy",
      location: { city: "ertet", contry: "dfgddfg" },
    }
]);
}
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.item}>
              <img src={u.photoUrl} alt="#" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.contry}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;
