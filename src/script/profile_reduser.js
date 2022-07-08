const initState = {
    postData:[
        {id:1, massage: "hi",likesCount: 15},
        {id:2, massage: "how are you?", likesCount: 5}
      ],
      newPostText: ''
}

export const profileReducer = (state = initState,action) =>{
   switch (action.type) {
    case 'ADD-POST':
        const newPost = {id:5,massage: state.newPostText,likesCount: 6}
        state.postData.push(newPost);
        state.newPostText = '';
        return state;
    case 'UPDATE-NEW-POST-TEXT':
        state.newPostText = action.newText;
        return state;
    default:
        return state;
   } 
}
export const addPostAction = () => ({type:'ADD-POST'});
export const updatePostAction = (text) => ({type:'UPDATE-NEW-POST-TEXT', newText: text });

export default profileReducer;