let renderTree = (state) =>{
  console.log("State");
}
  const state = {
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
  }

  export const setPost = () => {
    const newPost = {
      id:5,
      massage: state.profilePage.newPostText,
      like: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
  }
 export const updateNewPost = (newText) =>{
  state.profilePage.newPostText = newText;
  renderTree(state);
 }
export const subscribe = (observer) =>{
  renderTree = observer;
}
  export default  state;
  