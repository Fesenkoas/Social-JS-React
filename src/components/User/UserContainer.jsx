import React from "react";
import User from "./User";
import {connect} from "react-redux";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {follow, setUser, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../script/user_reduser";

//const API ='e6c298d2-d468-4ac0-a9d1-f103800c1b8a'
class UserContainer extends React.Component {
  
  componentDidMount (){
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response =>{
      this.props.toggleIsFetching(false);
      this.props.setUser(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount)
     } );
  }
  
  onPagechange =(pageNumber) =>{
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response =>{
        this.props.toggleIsFetching(false);
        this.props.setUser(response.data.items) } );
  }
  
  render(){
    
    return <>
    
    {this.props.isFetching ? <Preloader/>:
    <User 
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPagechange={this.onPagechange}
    users={this.props.users}
    unfollow={this.props.unfollow}
    follow={this.props.follow}
    />
      }
     </>
  }
  }

const mapStateToProps = (state) => {
return {
    users:state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
// return{
//     follow:(userId) => {
//         dispatch(followAC(userId));
//     },
//     unfollow:(userId) => {
//         dispatch(unfollowAC(userId));
//     },
//     setUsers:(users) => {
//         dispatch(setUserAC(users));
//     },
//     setCurrentPage:(pageNumber) =>{
//         dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount:(totalCount) =>{
//         dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching:(isFetching) =>{
//         dispatch(toggleIsFetchingAC(isFetching))
//     }
// }
// }

export  default connect (mapStateToProps,{
    follow,
    unfollow,
    setUser,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}) ( UserContainer)