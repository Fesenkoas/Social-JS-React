import axios from "axios";
import s from "./user.module.css";

const User = (props) => {
  const getUsers =() =>{
    if(props.users.length === 0){
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response =>{props.setUsers(response.data.items) } );
      // fetch("https://social-network.samuraijs.com/api/1.0/users")
      //   .then((response) => {return response.json();})
      //   .then((data) => {props.setUsers(data.items)});
    }
}
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.item}>
              <img src={u.photos.small!= null? u.photos.small : "https://openclipart.org/image/800px/177394"} alt="#" />
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
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.contry'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;
