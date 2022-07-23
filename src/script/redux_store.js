import {combineReducers,legacy_createStore as createStore} from "redux";
import profileReducer from "./profile_reduser"
import dialogReducer from "./dialog_reduser"
import sidebarReducer from "./sidebar_reduser"
import usersReducer from './user_reduser'
import authReducer from './auth_reducer'

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;