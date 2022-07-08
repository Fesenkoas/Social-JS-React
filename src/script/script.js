import profileReducer from "./profile_reduser"
import dialogReducer from "./dialog_reduser"
import sidebarReducer from "./sidebar_reduser"
const store = {
  
  _state :{
  profilePage:{
  postData:[
    {id:1, massage: "hi",likesCount: 15},
    {id:2, massage: "how are you?", likesCount: 5}
  ],
  newPostText: ''
},
dialogPage:{
  dialogData:[
    {id:1, name: 'dimich'},
    {id:2, name: 'sveta'},
    {id:3, name: 'valera'},
    {id:4, name: 'nasty'},
    {id:5, name: 'sasha'}
  ],
  messageData:[
    {id:1, massage: 'Hi'},
    {id:2, massage: "how are you?"},
    {id:3, massage: "im fine"},
    {id:4, massage: 'Hi'},
    {id:5, massage: 'Hi'}
    ], 
    newMessageText : ""
  },
  sidebar:{}
},
_callSubscriber(state){
  console.log("State");
},
getState(){
  return this._state;
},
 subscribe(observer){
  this._callSubscriber = observer;
},
dispatch(action){
  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
  this._state.dialogPage = sidebarReducer(this._state.dialogPage, action);

  this._callSubscriber(this._state);
  
}
}

  export default  store;
  window.store=store;
  