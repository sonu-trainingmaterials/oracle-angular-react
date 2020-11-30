import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import AddProfileForm from '../components/AddProfile';
import { addProfile, saveProfile } from '../actions/profile-actions';

function mapDispatchToProps(dispatch){
    let actionMap={
        //addProfile:addProfile,// use when inmemory data is used
        addProfile:saveProfile // use when async action is used to connect with REST api
    }
    return bindActionCreators(actionMap,dispatch);
}

export default withRouter(connect(null,mapDispatchToProps)(AddProfileForm))