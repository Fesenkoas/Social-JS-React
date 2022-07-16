import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { setUserProfile } from "../../script/profile_reduser";

function withRouter(Components) {
  function ComponentsWhithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Components {...props} router={{ location, navigate, params }} />;
  }
  return ComponentsWhithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 24948;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
