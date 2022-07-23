import React from "react";
import s from "./user.module.css";
import { Link } from "react-router-dom";
import { followAPI } from "../../api/api";

const User = ({
  totalUsersCount,
  follow,
  unfollow,
  pageSize,
  currentPage,
  onPagechange,
  users,
  toggleFollowingProgress,
  followingInProgress
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  let curP = currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      <div>
        <div>
          {slicedPages.map((p, key) => {
            return (<span key={key} className={currentPage === p ? s.selectPage : ""} onClick={(e) => onPagechange(p)}>{" "}{p}{" "}</span> );})}
        </div>
        {users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={s.item}>
                <Link to={"/profile/" + u.id}>
                  <img src={ u.photos.small != null? u.photos.small: "https://openclipart.org/image/800px/177394"}alt="#"/>
                </Link>
              </div>
              <div>
                {u.followed 
                ? (<button 
                   //disabled={followingInProgress.some(id => u.id === id)}
                  //disabled={followingInProgress.includes(u.id)}
                  onClick={() => {
                  toggleFollowingProgress(true,u.id); 
                  followAPI.getUnFollow(u.id)
                  .then(data => {if(data.resultCode===0)unfollow(u.id);}); 
                  toggleFollowingProgress(false, u.id);}} > Unfollow </button>)

                : (<button 
                 // disabled={followingInProgress.some(id => id === u.id)}
                  //disabled={followingInProgress.includes(u.id)}
                  onClick={() => {
                  toggleFollowingProgress(true,u.id); 
                  followAPI.getFollow(u.id)  
                  .then(data => {if(data.resultCode===0)follow(u.id);});   
                  toggleFollowingProgress(false,u.id);}}> Follow </button>)
                }
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
