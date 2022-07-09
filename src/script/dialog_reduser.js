const initState = {
  dialogData: [
    { id: 1, name: "dimich" },
    { id: 2, name: "sveta" },
    { id: 3, name: "valera" },
    { id: 4, name: "nasty" },
    { id: 5, name: "sasha" },
  ],
  messageData: [
    { id: 1, massage: "Hi" },
    { id: 2, massage: "how are you?" },
    { id: 3, massage: "im fine" },
    { id: 4, massage: "Hi" },
    { id: 5, massage: "Hi" },
  ],
  newMessageText: "",
};

export const dialogReducer = (state = initState, action) => {
    
  switch (action.type) {
    case "SEND-MESSAGE":
      const body = { id: 6, massage:state.newMessageText};
      return {
        ...state,
        messageData:[...state.messageData,body],
        newMessageText: ''
      }
    case "UPDATE-NEW-MESSAGE-TEXT":
      return{
        ...state,
        newMessageText: action.body
      };
     
    default:
      return state;
  }
};
export const addMessageAction = () => ({ type: "SEND-MESSAGE" });
export const updateMessageAction = (text) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  body: text,
});

export default dialogReducer;
