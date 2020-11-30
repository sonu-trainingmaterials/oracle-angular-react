import React from 'react';

//Uncontrolled component
export default class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.feedback = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.email.current.value, this.feedback.current.value)
        alert("thank you for submitting the feedback")
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 mx-auto">                   
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email"
                                defaultValue=""
                                ref={this.email}
                                name="email"
                                placeholder="your email here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <textarea className="form-control"
                                placeholder="your email here"
                                defaultValue=""
                                ref={this.feedback}
                                name="feedback" ></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}