const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT'

const initState = {
    users:[],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1
}

export const userReducer = (state = initState,action) =>{
   switch (action.type) {
       case FOLLOW:
          return {
               ...state,
               users: state.users.map(u =>{
                   if( u.id === action.userId){
                       return {...u, followed: true}
                   }
                   return u;
               })
           }
       case UNFOLLOW:
           return {
               ...state,
               users: state.users.map(u =>{
                   if (u.id === action.userId){
                       return {...u, followed: false}
                   }
                   return u;
               })
           }
       case SET_USER:
           return {...state, users:[...action.users]}

       case SET_CURRENT_PAGE:
        return {...state, currentPage:action.currentPage}
        case SET_USER_TOTAL_COUNT:
        return {...state, totalUsersCount:action.totalCount}
    default:
        return state;
   } 
}

export const followAC = (userId) => ({type:FOLLOW, userId});
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId });
export const setUserAC = (users) => ({type: SET_USER, users });
export const setCurrentPageAC = (currentPage) =>({type:SET_CURRENT_PAGE,currentPage});
export const setTotalUsersCountAC = (totalCount) =>({type:SET_USER_TOTAL_COUNT,totalCount});

export default userReducer;