
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CardWithStyle from './hoc/CardWithStyle';
import SearchBar from './SearchBar';
import HomeContext from '../contexts/HomeContextProvider';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }
    static propTypes = {
        profiles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            createdTs: PropTypes.string,
            updatedTs: PropTypes.string,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            sex: PropTypes.string.isRequired,
            birthdate: PropTypes.string.isRequired,
            phonenumber: PropTypes.string.isRequired,
            address: PropTypes.string,
            city: PropTypes.string,
            country: PropTypes.string,
            photo: PropTypes.string,
            favorite: PropTypes.bool
        }))
    }

    // UNSAFE_componentWillMount(){
    //     console.log("componentWillMount:Component is mounting")
    // }

    // static getDerivedStateFromProps(props, state) {
    //     //executes after the component is initialized or re-rendered
    //     //return the state object with updated props value
    //     //console.log("getDerivedStateFromProps")
    //     return { count: state.profiles.length };
    // }

    componentDidMount() {
        //console.log("componentDidMount:Component is mounted");
        this.props.fetchProfiles();
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log("shouldComponentUpdate");        
        return true;
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    // }
    componentDidUpdate() {
        //console.log("componentDidUpdate:Component is updated");
    }
    componentWillUnmount() {
        //console.log("componentWillUnmount:Component is destroying");
    }

    search(text) {       
        this.props.searchProfiles(text);       
    }


    render() {
        let StyledCard = CardWithStyle(Card);
        let items= [];
        if(this.props.searchText){
            items = this.props.results;
        }else{
            items = this.props.items
        }
        return (
            <HomeContext.Provider value={{ handleSearch:this.search}}>
            <div className="row">
                <div className="col-md-12">
                    {/* <SearchBar handleSearch={this.search} />  */}
                    <SearchBar/>
                    <h2>Profiles ({items.length})</h2>
                    <div className="row">
                        {
                            items.map(
                                (item, index) => <div key={index} className="col-md-6"><StyledCard user={item} /></div>
                            )
                        }
                    </div>
                </div>
            </div>
            </HomeContext.Provider>
        )
    }
}