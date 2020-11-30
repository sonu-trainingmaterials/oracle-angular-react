import React from 'react';

const AppInfo= ({company})=><div className="card">
    <div className="card-header"><h6>About application </h6></div>
    <div className="card-body">
        <div className="card-title">Profile Manager</div>
        <div className="card-text">
            <p>This is a simple ReactJs application used to demonstrate the use of React and Redux 
                for the management of User profiles.
            </p>
            { company && <p>Credits:{company}</p>}
        </div>
    </div>
</div>

export default React.memo(AppInfo);