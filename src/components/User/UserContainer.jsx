import User from "./User";
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC} from "../../script/user_reduser";

const mapStateToProps = (state) => {
return {
    users:state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
return{
    follow:(userId) => {
        dispatch(followAC(userId));
    },
    unfollow:(userId) => {
        dispatch(unfollowAC(userId));
    },
    setUsers:(users) => {
        dispatch(setUserAC(users));
    },
}
}

export  default connect (mapStateToProps,mapDispatchToProps) (User)