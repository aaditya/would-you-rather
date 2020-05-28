import React from 'react';

function BoardProfile(props) {
    return (
        <div style={{ marginTop: '15px', marginLeft: "15px" }}>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">
                    {props.user.name}
                </div>
                <img className="card-img-top" src={props.user.avatar} alt="Avatar" />
                <div className="card-body">
                    <h5 className="card-title">Would you Rather ?!</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Questions Created : {props.user.created}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Questions Answered : {props.user.answered}
                    </li>
                </ul>
                <div className="card-footer text-muted">
                    Total Score : {props.user.score}
                </div>
            </div>
        </div>
    )
}

export default BoardProfile;