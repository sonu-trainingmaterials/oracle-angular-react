import React, { Component } from "react";

export default class AddProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                name: "",
                email: "",
                sex: "M",
                birthdate: "",
                phonenumber: "",
                address: "",
                city: "",
                country: "",
                photo: ""
            },
            errors: {
                name: "",
                email: "",
                birthdate: "",
                phonenumber: "",
                country: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        let profile = this.state.profile;
        switch (name) {
            case "name":
                if (!value || value.length === 0) errors.name = "Name cannot be empty";
                else if (value.length < 2) errors.name = "Minimum 2 characters required";
                else errors.name = "";
                break;
            case "email":
                //eslint-disable-next-line
                let pattern = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
                if (!value || value.length === 0) errors.email = "Email cannot be empty";
                else if (!pattern.test(value)) errors.email = "Invalid email format";
                else errors.email = "";
                break;
            case "birthdate":
                if (!value || value.length === 0) errors.birthdate = "Birth date cannot be empty";
                else errors.birthdate = "";
                break;
            case "phonenumber":
                if (!value || value.length === 0) errors.phonenumber = "Phone number cannot be empty";
                else errors.phonenumber = "";
                break;
            case "city":
                if (!value || value.length === 0) errors.city = "City cannot be empty";
                else errors.city = "";
                break;
            case "address":
                if (!value || value.length === 0) errors.address = "Address cannot be empty";
                else errors.address = "";
                break;
            case "country":
                if (!value || value.length === 0) errors.country = "Country cannot be empty";
                else errors.country = "";
                break;
            default:
                break;
        }
        profile[name] = value;
        this.setState({ errors, profile }, () => {
            //console.log(this.state)
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.validateForm()) {
            alert("Invalid form");
        }
        else {
            this.props.addProfile(this.state.profile)
                .then(res => {
                    this.props.history.push('/');
                })
        }
    }
    render() {
        let errors = this.state.errors;
        return (
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2>Create Profile</h2>
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Name</label>
                                <input type="text" className="form-control" name="name" onChange={this.handleChange} />
                                {errors.name && <div className="text-danger">{errors.name}</div>}
                            </div>
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Email</label>
                                <input type="email" name="email" className="form-control" onChange={this.handleChange} />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div >
                        </div >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Photo</label>
                                <input type="text" className="form-control" name="photo" onChange={this.handleChange} />

                            </div>
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Sex</label>
                                <select name="sex" className="form-control" value={this.state.profile.sex} id="" onChange={this.handleChange}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div >
                        </div >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Birthday</label>
                                <input type="date" name="birthdate" className="form-control" onChange={this.handleChange} />
                                {errors.birthdate && <div className="text-danger">{errors.birthdate}</div>}
                            </div >
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Phone</label>
                                <input type="tel" name="phonenumber" className="form-control" onChange={this.handleChange} />
                                {errors.phonenumber && <div className="text-danger">{errors.phonenumber}</div>}
                            </div >
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Address</label>
                                <input type="text" name="address" className="form-control" onChange={this.handleChange} />
                                {errors.address && <div className="text-danger">{errors.address}</div>}
                            </div>
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">City</label>
                                <input type="text" name="city" className="form-control" onChange={this.handleChange} />
                                {errors.city && <div className="text-danger">{errors.city}</div>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="col-sm-2 control-label">Country</label>
                                <input type="text" name="country" className="form-control" onChange={this.handleChange} />
                                {errors.country && <div className="text-danger">{errors.country}</div>}
                            </div >
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12 text-center">
                                <button type="submit" className="btn btn-primary" >Save</button>
                            </div>
                        </div >
                    </form >
                </div >
            </div >
        );
    }

    validateForm() {
        let profile = this.state.profile;
        let errors = this.state.errors;
        let valid = true;
        Object.keys(profile).forEach((field) => {
            let value = profile[field];
            switch (field) {
                case "name":
                    if (!value || value.length === 0) errors.name = "Name cannot be empty";
                    else if (value.length < 2) errors.name = "Minimum 2 characters required";
                    else errors.name = "";
                    break;
                case "email":
                    //eslint-disable-next-line
                    let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (!value || value.length === 0) errors.email = "Email cannot be empty";
                    else if (!pattern.test(value)) errors.email = "Invalid email format";
                    else errors.email = "";
                    break;
                case "birthdate":
                    if (!value || value.length === 0) errors.birthdate = "Birth date cannot be empty";
                    else errors.birthdate = "";
                    break;
                case "phonenumber":
                    if (!value || value.length === 0) errors.phonenumber = "Phone number cannot be empty";
                    else errors.phonenumber = "";
                    break;
                case "city":
                    if (!value || value.length === 0) errors.city = "City cannot be empty";
                    else errors.city = "";
                    break;
                case "address":
                    if (!value || value.length === 0) errors.address = "Address cannot be empty";
                    else errors.address = "";
                    break;
                case "country":
                    if (!value || value.length === 0) errors.country = "Country cannot be empty";
                    else errors.country = "";
                    break;
                default:
                    break;
            }
        })
        this.setState({ errors, profile });

        Object.values(errors).forEach((val) => (val.length > 0) && (valid = false));
        return valid;
    }
}