import React from "react"
import axios from "axios";
import s from "./user.module.css";

class User extends React.Component {
  // constructor(props){
  //   super(props);
    
  // }

componentDidMount (){
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
  .then(response =>{
    this.props.setUsers(response.data.items);
    this.props.setTotalUsersCount(response.data.totalCount)
   } );
}

onPagechange =(pageNumber) =>{
  this.props.setCurrentPage(pageNumber)
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
  .then(response =>{this.props.setUsers(response.data.items) } );
}

render(){
  const pagesCount =Math.ceil(this.props.totalUsersCount/this.props.pageSize);
  const pages = [];

  for(let i=1; i<=pagesCount;i++)pages.push(i);

  let curP = this.props.currentPage;
  let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
  let curPL = curP + 5;
  let slicedPages = pages.slice( curPF, curPL);
  return (
    <div>
      <div>
        {slicedPages.map(p => {
          return <span className={this.props.currentPage === p ? s.selectPage: ''} 
          onClick={(e) => this.onPagechange(p)}> {p} </span>
        })}
      </div>
      {this.props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.item}>
              <img src={u.photos.small!= null? u.photos.small : "https://openclipart.org/image/800px/177394"} alt="#" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
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
}
}

export default User