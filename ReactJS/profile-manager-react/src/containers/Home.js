import Home from '../components/Home';
import { connect } from 'react-redux';
import { fetchProfiles, searchProfiles} from '../actions/profile-actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        items:state.profiles.items, //appstate.reducer.propertyName 
        searchText:state.profiles.searchText, // appstate.reducer.propertyName
        results:state.profiles.results
    };
}

function mapDispatchToProps(dispatch){
    let actionMap={
        searchProfiles:searchProfiles,
        fetchProfiles:fetchProfiles
    }
    return bindActionCreators(actionMap,dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));