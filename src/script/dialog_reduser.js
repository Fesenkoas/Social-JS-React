export const dialogReducer = (state,action) =>{
    switch (action.type) {
        case 'SEND-MESSAGE':
            const body = state.newMessageText;
        state.messageData.push( {id:6, massage: body})
        state.newMessageText = '';
        
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.body;
            return state;
        default:
            return state;
       } 
}
export const addMessageAction = () => ({type:'SEND-MESSAGE'});
export const updateMessageAction = (text) => ({type:'UPDATE-NEW-MESSAGE-TEXT', body: text });

export default dialogReducer;