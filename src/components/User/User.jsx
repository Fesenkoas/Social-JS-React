import React from "react";
import s from "./user.module.css";
import {Link} from "react-router-dom";

const User = ({totalUsersCount,follow,unfollow,pageSize,currentPage,onPagechange,users}) => {
    const pagesCount =Math.ceil(totalUsersCount/pageSize);
  const pages = [];

  for(let i=1; i<=pagesCount;i++)pages.push(i);

  let curP = currentPage;
  let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
  let curPL = curP + 5;
  let slicedPages = pages.slice( curPF, curPL);

  return (
    <div>
      <div>
        <div>
          {slicedPages.map((p) => {
            return (
              <span
                className={currentPage === p ? s.selectPage : ""}
                onClick={(e) => onPagechange(p)}
              >
                {" "}
                {p}{" "}
              </span>
            );
          })}
        </div>
        {users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={s.item}>
                <Link to={"/profile/" + u.id}>
                <img src={u.photos.small != null ? u.photos.small: "https://openclipart.org/image/800px/177394"} alt="#"/>
                </Link>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      follow(u.id);
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
                <div>{"u.location.contry"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
