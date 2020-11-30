import React from 'react';
import { useHistory } from 'react-router-dom';

const About =(props)=>{
    let modifiedChildren = React.Children.map(props.children, (child)=>{
        return React.cloneElement(child, { company:'Synergetics'});
    });
    
    //Use hitory Hook to enable routing
    let history = useHistory();

    return(
        <div className="row">
            <div className="col-md-12">
                <h2>About</h2>
                <button className="btn btn-primary" onClick={()=>history.push('/')}>Back to Home</button>
                <hr/>
                {/* <div>{props.children}</div> */}
                <div>{modifiedChildren}</div>
            </div>
        </div>
    )
}

export default About;