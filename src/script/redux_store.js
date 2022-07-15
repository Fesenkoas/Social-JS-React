import {combineReducers,legacy_createStore as createStore} from "redux";
import profileReducer from "./profile_reduser"
import dialogReducer from "./dialog_reduser"
import sidebarReducer from "./sidebar_reduser"
import usersReducer from './user_reduser'

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);
window.store = store;

export default store;