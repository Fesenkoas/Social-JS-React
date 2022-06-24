import { renderTree } from "../render.js";
  const state = {
    profilePage:{
    postData:[
      {id:1, massage: "hi",likesCount: 15},
      {id:2, massage: "how are you?", likesCount: 5}
    ]
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

  export const setPost = (postMessage) => {
    const newPost = {
      id:5,
      massage:postMessage,
      like: 0
    };
    state.profilePage.postData.push(newPost);
    renderTree(state);
  }
 

  export default  state;
  