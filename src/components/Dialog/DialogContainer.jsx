import Dialog from "./Dialog";
import {updateMessageAction,addMessageAction} from "../../script/dialog_reduser";
import  {connect} from "react-redux";


const mapStateToProps = (state) =>{
return{
  dialogData:state.dialogPage.dialogData,
  messageData:state.dialogPage.messageData
}
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateMessageAction: (body) =>{
      dispatch(updateMessageAction(body));
    },
    addMessageAction: () =>{
      dispatch(addMessageAction());
    }
  }
}
const DialogContainer= connect(mapStateToProps,mapDispatchToProps) (Dialog);
export default DialogContainer;
