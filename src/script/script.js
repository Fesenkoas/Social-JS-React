
const store = {
  
  _state :{
  profilePage:{
  postData:[
    {id:1, massage: "hi",likesCount: 15},
    {id:2, massage: "how are you?", likesCount: 5}
  ],
  newPostText: 'Wats up!'
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
    ] 
  }
},
getState(){
  return this._state;
},
_callSubscriber(state){
  console.log("State");
},

 subscribe(observer){
  this._callSubscriber = observer;
},

dispatch(action){
if(action.type==='ADD-POST'){
  const newPost = {
    id:5,
    massage: this._state.profilePage.newPostText,
    like: 6
  };
  this._state.profilePage.postData.push(newPost);
  this._state.profilePage.newPostText = '';
  this._callSubscriber(this._state);
}
else if (action.type==='UPDATE-NEW-POST-TEXT'){
  this._state.profilePage.newPostText = action.newText;
  this._callSubscriber(this._state);
 }
}
}

  
 

  export default  store;
  window.store=store;
  