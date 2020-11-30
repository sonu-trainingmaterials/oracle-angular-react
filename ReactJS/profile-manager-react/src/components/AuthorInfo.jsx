import React from 'react';

export const AuthorInfo = ({ author, company }) => <div className="card">
    <div className="card-header"><h6>About Author</h6></div>
    <div className="card-body">
        <div className="card-title">{author}</div>
        <div className="card-text">
            <p>Practice Head - Open Source and .NET</p>
            <p>email: sonusathyadas@synergetics-india.com</p>
            <p>mobile: 8943089425</p>
            { company && <p>Company: {company}</p> }
        </div>
    </div>
</div>

export default React.memo(AuthorInfo);