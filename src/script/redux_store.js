import {combineReducers,legacy_createStore as createStore} from "redux";
import profileReducer from "./profile_reduser"
import dialogReducer from "./dialog_reduser"
import sidebarReducer from "./sidebar_reduser"

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    sidebar:sidebarReducer
});

const store = createStore(reducers);

export default store;