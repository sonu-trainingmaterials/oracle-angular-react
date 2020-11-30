import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function Card(props) {
    let profile = props.user;

    return (
        <div className="well well-sm" >
            <div className="row">
                <div className="col-md-4">
                    <img src={setImage(profile.photo, profile.sex)} alt={profile.name}
                        className="img-rounded img-responsive image-size" />
                </div>
                <div className="col-md-8">
                    <h4 >{profile.name}
                    </h4>
                    <small>{profile.city}, {profile.country} </small>
                    <p>
                        {profile.email}
                        <br />
                        {new Date(profile.birthdate).toLocaleDateString()}
                    </p>
                    <p>
                        <NavLink to={'profiles/edit/' + profile.id} className="btn btn-sm btn-success" >Edit</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    user: PropTypes.shape({
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
    })
}

function setImage(url, sex) {
    if (url) return url;
    else
        if (sex === "M") return "/images/male.jpg";
        else return "/images/female.jpg";

}

export default Card;