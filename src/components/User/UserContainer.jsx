import React from "react";
import User from "./User";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {follow, setUser, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from "../../script/user_reduser";
import { userAPI } from "../../api/api";

class UserContainer extends React.Component {
  
  componentDidMount (){
    
    this.props.toggleIsFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
      this.props.toggleIsFetching(false);
      this.props.setUser(data.items);
      this.props.setTotalUsersCount(data.totalCount)
     } );
  }
  
  onPagechange =(pageNumber) =>{
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber)
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
        this.props.toggleIsFetching(false);
        this.props.setUser(data.items) 
        this.props.setTotalUsersCount(data.totalCount); 
      } );
  }
  
  render(){
    
    return (
    <>
    
    {this.props.isFetching ? <Preloader/>:
    <User 
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPagechange={this.onPagechange}
    users={this.props.users}
    unfollow={this.props.unfollow}
    follow={this.props.follow}
    toggleFollowingProgress ={this.props.toggleFollowingProgress}
    />
      }
     </>
     );
  }
  }

const mapStateToProps = (state) => {
return {
    users:state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress
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
    toggleIsFetching,
    toggleFollowingProgress
}) ( UserContainer)